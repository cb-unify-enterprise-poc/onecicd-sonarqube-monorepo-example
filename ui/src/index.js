'use strict';

const { formatGreeting } = require('./greeting');

if (require.main === module) {
  console.log(formatGreeting(process.argv[2]));
}

module.exports = { formatGreeting };
