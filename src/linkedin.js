'use strict';

import Base from './base';

export default class LinkedIn extends Base {
  buildUrl (url) {
    let encoded = encodeURIComponent(url);
    return `http://www.linkedin.com/countserv/count/share?url=${encoded}&format=json`;
  }
};
