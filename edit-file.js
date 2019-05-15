'use strict';

const fs = require('fs');

/**
 * Takes in a file path and replaces the contents of the file with a random number from 0 to 1.
 * @param {String} filePath
 */
let editFile = (filePath) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }
    console.log(`old contents: ${data.toString()}`);
    let randomVal = `${Math.random()}`;
    fs.writeFile(filePath, randomVal, (err) => {
      if (err) {
        console.error(err);
      }
      console.log(`new contents: ${randomVal}`);
    });
  });
};

editFile(process.argv[2]);
