# What is fhir-list-addresses

This is a module that will take in an FHIR Practitioner record and return a list of all the addresses that are in the following FHIR locations:

- `Practitioner.address`
- `Practitioner.contained`


## Installation
```
npm install fhir-list-addresses
```

## Basic Usage

```
const fhirListAddresses = require('fhir-list-addresses');
const data = fhirListAddresses(practitionerNoAddress);
```

## Returns

The call will return a data array that will have each address object in it.  Options can limit the attributes returned and whether or not it is de-duplicated. It will also return a string (line) that has all of the addresses in it.

```
{
  "data": [
    {
      "city": "WASHINGTON",
      "state": "DC"
    },
    {
      "city": "BETHESDA",
      "state": "MD"
    }
  ],
  "line": {
    "string": "WASHINGTON, DC - BETHESDA, MD",
    "truncated": false
  }
}
```

## Options

```
{
  line: {
    length: 10,
    addEllipsis: true,
  }
  includeAddressAttributes: ['city', 'state'],
  deDuplicate: true,
}
```
### Limit Line Length
You may want to limit the string returned

#### length
An integer that represented the number of characters the line will have.

#### addEllipsis
A boolean that will add an `...` to the end of the line

#### includeAddressAttributes
An array of attributes that will be included in the result.  This is a good way to filter out parts of the address that are not needed.

#### deDuplicate
A boolean that will result in the data being de-duplicated. Currently this will only de-duplicate by `city` and `state`

##### An Example

| This                                                                          | Becomes                                    |
|-------------------------------------------------------------------------------|--------------------------------------------|
| ```[{'city': 'BETHESDA', 'state': 'MD'},{'city': 'BETHESDA','state': 'MD'}]```| ```[{'city': 'BETHESDA', 'state': 'MD'}]```|

#### orderByState
A string that will let you pick which state to put at the beginning of the data
```
orderByState: 'MD'
```

#### stringDelimiter
This will delimit each address in the line
```
stringDelimiter: ' | '
