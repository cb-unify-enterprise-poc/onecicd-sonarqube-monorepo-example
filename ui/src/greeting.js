'use strict';

const DEFAULT_NAME = 'World';

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatGreeting(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    return `Hello, ${DEFAULT_NAME}!`;
  }
  return `Hello, ${capitalize(name.trim())}!`;
}

module.exports = { formatGreeting };
