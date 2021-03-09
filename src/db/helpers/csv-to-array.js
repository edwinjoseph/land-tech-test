const camelCase = require('lodash/camelCase');
const csvToArray = (data) => {
  const array = data.split('\n').map(row => row.split(','));
  const headers = array[0].map(camelCase);

  return array
    .slice(1)
    .map(row => 
      row.reduce((acc, value, idx) => {
        acc[headers[idx]] = value;
        return acc;
      }, {})
    );
};

module.exports = csvToArray
