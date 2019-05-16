'use strict';

const fs = require('fs');
const { promisify } = require('util');

/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files, callback) => {
  readAll([...files], callback);
};

/**
 * Promise version of fs.readFile function
 * @param {String} filepath
 */
const readFileAsync = promisify(fs.readFile);

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = async (paths, callback) => {
  let contents = [];

  try {
    let fileContent = await readFileAsync(paths[0]);
    console.log('Read File 1');
    contents.push(fileContent.toString().trim());

    fileContent = await readFileAsync(paths[1]);
    console.log('Read File 2');
    contents.push(fileContent.toString().trim());

    fileContent = await readFileAsync(paths[2]);
    console.log('Read File 3');
    contents.push(fileContent.toString().trim());

    callback(null, contents);
  } catch (err) {
    callback(err);
  }
};
