'use strict';

import Base from './base';

export default class Twitter extends Base {
  buildUrl (url) {
    let encoded = encodeURIComponent(url);
    return `http://cdn.api.twitter.com/1/urls/count.json?url=${encoded}`;
  }
};
