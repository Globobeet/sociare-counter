'use strict';

import Base from './base';

export default class GooglePlus extends Base {
  buildUrl (url) {
    let encoded = encodeURIComponent(url);
    return `http://share.yandex.ru/gpp.xml?url=${encoded}`;
  }

  parseResponse (data) {
    let val = data.replace(/^services\.gplus\.cb\(\"/, '').replace(/\"\)\;$/, '');
    return { count: +val };
  }
};
