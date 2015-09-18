'use strict';

import Base from './base';

export default class Pinterest extends Base {
  buildUrl (url) {
    let encoded = encodeURIComponent(url);
    return `http://api.pinterest.com/v1/urls/count.json?callback%20&url=${encoded}`;
  }

  parseResponse (data) {
    return JSON.parse(data.replace(/^receiveCount\(/, '').replace(/\)$/, ''));
  }
};
