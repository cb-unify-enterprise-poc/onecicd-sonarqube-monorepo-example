'use strict';

// Dependency-free "build": copies src/ to dist/. Stands in for a real bundler.
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');

fs.rmSync(dist, { recursive: true, force: true });
fs.cpSync(src, dist, { recursive: true });
console.log(`Built ${path.relative(root, src)} -> ${path.relative(root, dist)}`);
