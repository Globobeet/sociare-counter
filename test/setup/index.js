'use strict';

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

// Need to specify these globally since the webpack loaders do this
// automatically. Makes for less verbose test files at least.
global.expect = chai.expect;
global.sinon = sinon;
