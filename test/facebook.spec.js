'use strict';

import Facebook from '../src/facebook.js';

describe('[Services] - Facebook', () => {
  let service = new Facebook(),
      url = 'http://example.com',
      encoded = encodeURIComponent(url);

  describe('buildUrl', () => {
    it('should return the correct count url', () => {
      expect(service.buildUrl(url)).to.equal(`http://graph.facebook.com/?id=${encoded}`);
    });
  });

  describe('formatData', () => {
    it('should return the shares property', () => {
      expect(service.formatData({ shares: 5, count: 2 })).to.equal(5);
    });

    it('should return 0 if shares is falsy', () => {
      expect(service.formatData({})).to.equal(0);
    });
  });
});
