'use strict';

import LinkedIn from '../src/linkedin.js';

describe('[Services] - LinkedIn', () => {
  let service = new LinkedIn(),
      url = 'http://example.com',
      encoded = encodeURIComponent(url);

  describe('buildUrl', () => {
    it('should return the correct count url', () => {
      expect(service.buildUrl(url)).to.equal(`http://www.linkedin.com/countserv/count/share?url=${encoded}&format=json`);
    });
  });
});
