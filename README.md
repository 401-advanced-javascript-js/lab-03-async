# Lab - 03

## Async

### Author: Jagdeep Singh

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-js/lab-03-async/pull/1)

- [travis](https://www.travis-ci.com/401-advanced-javascript-js/lab-03-async)

### Modules

#### `index.js`

- Accepts file names as command line parameters.
- `fileReader(files, callback)` function is then called with a callback to read the contents of the files
- `fileReader(files, callback)` returns the contents of the files stored in an array, in the same order the files were passed in as parameters

#### `reader.js`, `reader-promises.js`, `reader-async.js`

- called using `reader(files, callback)`

- gets contents of files and runs error first callback with files

### Setup

- clone repo by running the command in terminal:

  `git clone https://github.com/401-advanced-javascript-js/lab-03-async.git`

- run the following command in terminal:

  `npm i`

#### Running the tests

- run the following command in terminal:

  `npm test`

#### Tests

- How do you run tests?

  `npm test`

- What assertions were made?
  - tests for:
    - `reader.js`
    - `reader-promises.js`
    - `reader-async.js`
