'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { formatGreeting } = require('../src/greeting');

test('greets by name', () => {
  assert.equal(formatGreeting('ada'), 'Hello, Ada!');
});

test('trims whitespace', () => {
  assert.equal(formatGreeting('  grace  '), 'Hello, Grace!');
});

test('falls back to the default for blank or non-string input', () => {
  assert.equal(formatGreeting(' '), 'Hello, World!');
  assert.equal(formatGreeting(undefined), 'Hello, World!');
});
