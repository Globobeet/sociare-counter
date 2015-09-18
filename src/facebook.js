'use strict';

import Base from './base';

export default class Facebook extends Base {
  buildUrl (url) {
    let encoded = encodeURIComponent(url);
    return `http://graph.facebook.com/?id=${encoded}`;
  }

  formatData (data) {
    return data.shares;
  }
};
