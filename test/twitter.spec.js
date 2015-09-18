'use strict';

import Twitter from '../src/twitter.js';

describe('[Services] - Twitter', () => {
  let service = new Twitter(),
      url = 'http://example.com',
      encoded = encodeURIComponent(url);

  describe('buildUrl', () => {
    it('should return the correct count url', () => {
      expect(service.buildUrl(url)).to.equal(`http://cdn.api.twitter.com/1/urls/count.json?url=${encoded}`);
    });
  });
});
