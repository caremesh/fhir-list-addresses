const _ = require('lodash');
module.exports = function(practitioner, opts = {}) {
  const addressParts = _.get(opts, 'includeAddressAttributes', ['use', 'city', 'line', 'type', 'state', 'country', 'postalCode']);
  const createCityStateObject = function(item) {
    const data = {};
    _.forEach(addressParts, (part) => {
      if (_.has(item, part) && item[part] !== '') {
        data[part] = item[part];
      }
    });
    return data;
  };
  const createLine = function(dataArray) {
    let line = '';
    let truncated = false;
    _.forEach(dataArray, (pair, i) => {
      _.forEach(addressParts, (part, j) => {
        line = `${line}${pair[part]}`;
        if (j < (addressParts.length - 1)) {
          line = `${line}, `;
        }
      });
      if (i < (dataArray.length - 1)) {
        line = `${line} - `;
      }
    });

    if (_.has(opts, 'line.length') && line.length > _.get(opts, 'line.length')) {
      line = `${_.trimEnd(line.substring(0, _.get(opts, 'line.length')))}`;
      truncated = true;
    } else {
      line = `${_.trimEnd(line)}`;
    }
    if (_.get(opts, 'line.addEllipsis', false)) {
      line = `${line} ...`;
    }

    return {
      line: {
        string: line,
        truncated
      },
    };
  };
  const data = _.uniqBy(
    _.union(
      _.map(_.get(practitioner, 'address', []), (i) => {
        return createCityStateObject(i);
      }),
      _.compact(_.map(_.get(practitioner, 'contained', []), (i) => {
        if (_.has(i, 'address')) {
          return createCityStateObject(_.get(i, 'address', {}));
        }
      }))
    ), (e) => {
      if (_.get(opts, 'deDuplicate', false)) {
        return e.city && e.state;
      }
      return e;
    }
  );

  return {
    data,
    ... createLine(data),
  }
};