'use strict';

import Base from './base';

export default class GooglePlus extends Base {
  buildUrl (url) {
    let encoded = encodeURIComponent(url);
    return `https://plusone.google.com/_/+1/fastbutton?url=${encoded}&count=true`;
  }

  parseResponse (data) {
    let matches = data.match(/window\.__SSR = {c: ([\d]+)/gi),
        parsed = { count: 0 };

    if (matches) {
      parsed.count = +(matches[0].replace('window.__SSR = {c: ', ''));
    }

    return parsed;
  }
};
