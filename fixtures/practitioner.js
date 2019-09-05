module.exports = {
  "name": [
    {
      "use": "usual",
      "text": "BARNEY RUBBLE, MSW, LICSW",
      "given": [
        "BARNEY"
      ],
      "family": "RUBBLE",
      "prefix": [],
      "suffix": [
        "MSW, LICSW"
      ]
    }
  ],
  "id": "ba61d3c4-3870-5919-8f63-54b3af3ce4ec",
  "address": [
    {
      "use": "work",
      "city": "WASHINGTON",
      "line": [
        "1600 PENNSYLVANIA AVENUE"
      ],
      "type": "postal",
      "state": "DC",
      "country": "US",
      "postalCode": "20037"
    },
    {
      "use": "work",
      "city": "BETHESDA",
      "line": [
        "9925 HARROGATE RD"
      ],
      "text": "9925 HARROGATE RD\nBETHESDA MD 20817",
      "type": "physical",
      "state": "MD",
      "country": "US",
      "postalCode": "20817"
    },
    {
      "use": "work",
      "city": "WASHINGTON",
      "line": [
        "1000 JEFFERSON DR SW"
      ],
      "text": "1000 JEFFERSON DR SW\n \nWASHINGTON DC 20560",
      "state": "DC",
      "country": "US",
      "postalCode": "20560"
    }
  ],
  "identifier": [
    {
      "use": "official",
      "value": "1234567890",
      "system": "http://hl7.org/fhir/sid/us-npi"
    },
    {
      "use": "official",
      "value": "LC50078205",
      "system": "https://www.hl7.org/fhir/valueset-identifier-type.html#MD",
      "assigner": {
        "display": "DC - Medical - License - MD"
      }
    },
    {
      "value": "npi+1234567890",
      "system": "http://fhir.caremesh.com/r4/resourceKey"
    }
  ],
  "resourceType": "Practitioner",
  "contained": [
    {
      "id": "f221fa2c-4132-56f0-869c-d026b6af7398",
      "active": true,
      "location": [
        {
          "display": "PRACTICE LOCATION",
          "reference": "Location/5dddc2f3-ccd8-58c2-8564-8a7d32e42819"
        }
      ],
      "identifier": [],
      "practitioner": {
        "identifier": {
          "use": "official",
          "value": "1234567890",
          "system": "http://hl7.org/fhir/sid/us-npi"
        }
      },
      "resourceType": "PractitionerRole"
    },
    {
      "id": "5dddc2f3-ccd8-58c2-8564-8a7d32e42819",
      "name": "PRACTICE LOCATION",
      "address": {
        "use": "work",
        "city": "BETHESDA",
        "line": [
          "9000 ROCKVILLE PIKE"
        ],
        "text": "9000 ROCKVILLE PIKE\nBETHESDA MD 20892",
        "type": "physical",
        "state": "MD",
        "country": "US",
        "postalCode": "20892"
      },
      "telecom": [
        {
          "use": "work",
          "rank": 1,
          "value": "2067093100",
          "system": "phone"
        }
      ],
      "identifier": [],
      "resourceType": "Location"
    }
  ],
  "telecom": [
    {
      "use": "work",
      "rank": 1,
      "value": "2024561111",
      "system": "phone"
    },
    {
      "use": "work",
      "rank": 2,
      "value": "9512623062",
      "system": "phone"
    }
  ],
  "active": true
};