'use strict';

import Base from '../src/base.js';

const Promise = require('bluebird');
const request = require('request-promise');

describe('[Services] - Base', () => {
  let service = new Base(),
      url = 'http://example.com',
      data = { foo: 'bar', count: 5 },
      _request;

  beforeEach(() => {
    _request = sinon.stub(request, 'get');
    _request.returns(Promise.resolve(JSON.stringify(data)));
  });

  afterEach(() => {
    _request.restore();
  });

  describe('buildUrl', () => {
    it('should return the url provided', () => {
      expect(service.buildUrl(url)).to.equal(url);
    });
  });

  describe('sendRequest', () => {
    it('should request the url provided', () => {
      return service.sendRequest(url)
        .then(result => {
          expect(_request).to.have.been.calledOnce;
          expect(_request).to.have.been.calledWithExactly(url);
          expect(result).to.equal(JSON.stringify(data));
        });
    });
  });

  describe('parseResponse', () => {
    it('should parse the response JSON', () => {
      expect(service.parseResponse(JSON.stringify(data))).to.deep.equal(data);
    });
  });

  describe('formatData', () => {
    it('should return the count property', () => {
      expect(service.formatData(data)).to.equal(5);
    });
  });

  describe('getCount', () => {
    it('should return a promise', () => {
      expect(service.getCount(url)).to.be.an.instanceOf(Promise);
    });

    it('should resolve with the count', () => {
      return service.getCount(url)
        .then(count => {
          expect(count).to.equal(5);
        });
    });
  });

  describe('on failure', () => {
    let error;

    beforeEach(() => {
      _request.returns(Promise.reject({ message: 'Some error' }));
      error = sinon.stub(console, 'error');
    });

    afterEach(() => { error.restore(); });

    it('should log the error', () => {
      return service.getCount(url)
        .then(() => {
          expect(error).to.have.been.calledOnce;
          expect(error).to.have.been.calledWith('Error getting count:', { message: 'Some error' });
        });
    });

    it('should return a 0 count', () => {
      return service.getCount(url)
        .then(count => {
          expect(count).to.equal(0);
        });
    });
  });
});
