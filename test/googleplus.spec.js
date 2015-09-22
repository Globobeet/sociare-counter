'use strict';

import GooglePlus from '../src/googleplus.js';

describe('[Services] - GooglePlus', () => {
  let service = new GooglePlus(),
      url = 'http://example.com',
      encoded = encodeURIComponent(url);

  describe('buildUrl', () => {
    it('should return the correct count url', () => {
      expect(service.buildUrl(url)).to.equal(`http://share.yandex.ru/gpp.xml?url=${encoded}`);
    });
  });

  describe('parseResponse', () => {
    describe('returns an object', () => {
      it('should have a count returned from yandex', () => {
        expect(service.parseResponse('services.gplus.cb("5");')).to.deep.equal({ count: 5 });
      });

      it('should have a count of 0 if no count provided', () => {
        expect(service.parseResponse('services.gplus.cb("");')).to.deep.equal({ count: 0 });
      });
    });
  });
});
