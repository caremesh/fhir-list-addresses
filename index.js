const _ = require('lodash');
module.exports = function(practitioner, opts = {}) {
  const stringDelimiter = _.get(opts, 'stringDelimiter', ' - ');
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
    let fullLine = '';
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
        line = `${line}${stringDelimiter}`;
      }
    });

    fullLine = _.cloneDeep(line);
    const shouldAddEllipsis = (_.get(opts, 'line.addEllipsis', false) && (line.length > _.get(opts, 'line.length')));
    if (_.has(opts, 'line.length') && line.length > _.get(opts, 'line.length')) {
      line = `${_.trimEnd(line.substring(0, _.get(opts, 'line.length')))}`;
      truncated = true;
    } else {
      line = `${_.trimEnd(line)}`;
      fullLine = `${_.trimEnd(fullLine)}`;
    }
    if (shouldAddEllipsis) {
      line = `${line} ...`;
    }

    return {
      line: {
        string: line,
        truncated
      },
      fullLine,
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
        return e.state && e.city;
      }
      return e;
    }
  );

  if (_.has(opts, 'orderByState')) {
    const state = _.get(opts, 'orderByState');
    data.sort(function(x,y){
      return x.state == state ? -1 : y.state == state ? 1 : 0; }
    );
  }

  return {
    data,
    ... createLine(data),
  }
};