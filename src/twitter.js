'use strict';

import Base from './base';

export default class Twitter extends Base {
  buildUrl (url) {
    let encoded = encodeURIComponent(url);
    return `https://urls.api.twitter.com/1/urls/count.json?url=${encoded}`;
  }
};
