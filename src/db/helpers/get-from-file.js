const fs = require('fs');
const csvToArray = require('./csv-to-array');

const getFromFile = (filename) => {
  const data = fs.readFileSync(`${__dirname}/../../../data_sources/${filename}.csv`, 'utf-8');
  return csvToArray(data);
};

module.exports = getFromFile;
