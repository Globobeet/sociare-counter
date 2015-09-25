'use strict';

import Pinterest from '../src/pinterest.js';

describe('[Services] - Pinterest', () => {
  let service = new Pinterest(),
      url = 'http://example.com',
      encoded = encodeURIComponent(url);

  describe('buildUrl', () => {
    it('should return the correct count url', () => {
      expect(service.buildUrl(url)).to.equal(`http://widgets.pinterest.com/v1/urls/count.json?url=${encoded}`);
    });
  });

  describe('parseResponse', () => {
    it('should strip out the jsonp callback wrapper', () => {
      expect(service.parseResponse(`receiveCount(${JSON.stringify({count: 5})})`)).to.deep.equal({ count: 5 });
    });
  });
});
