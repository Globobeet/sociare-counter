'use strict';

import GooglePlus from '../src/googleplus.js';

describe('[Services] - GooglePlus', () => {
  let service = new GooglePlus(),
      url = 'http://example.com',
      encoded = encodeURIComponent(url);

  describe('buildUrl', () => {
    it('should return the correct count url', () => {
      expect(service.buildUrl(url)).to.equal(`https://plusone.google.com/_/+1/fastbutton?url=${encoded}&count=true`);
    });
  });

  describe('parseResponse', () => {
    describe('returns an object', () => {
      it('should have a count from the regex match', () => {
        expect(service.parseResponse('window.__SSR = {c: 5, count: 2}')).to.deep.equal({ count: 5 });
      });

      it('should have a count of 0 if no matches', () => {
        expect(service.parseResponse('')).to.deep.equal({ count: 0 });
      });
    });
  });
});
