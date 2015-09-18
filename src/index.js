'use strict';

import Facebook from './facebook';
import Twitter from './twitter';
import Pinterest from './pinterest';
import LinkedIn from './linkedin';
import GooglePlus from './googleplus';

const Promise = require('bluebird');
const $facebook = Symbol('facebook');
const $twitter = Symbol('twitter');
const $pinterest = Symbol('pinterest');
const $linkedin = Symbol('linkedin');
const $googleplus = Symbol('googleplus');

class SociareCounter {
  constructor() {
    this[$facebook]   = new Facebook();
    this[$twitter]    = new Twitter();
    this[$pinterest]  = new Pinterest();
    this[$linkedin]   = new LinkedIn();
    this[$googleplus] = new GooglePlus();
  }

  get facebook()    { return this[$facebook]; }
  get twitter()     { return this[$twitter]; }
  get pinterest()   { return this[$pinterest]; }
  get linkedin()    { return this[$linkedin]; }
  get googleplus()  { return this[$googleplus]; }

  getCounts(url, opts = {}) {
    let networks = opts.networks || ['facebook', 'twitter', 'pinterest', 'linkedin', 'googleplus'];

    if (opts.omitQuery) {
      url = url.split('?')[0];
    }

    return Promise.props(networks.reduce((obj, network) => {
      obj[network] = this[network].getCount(url);
      return obj;
    }, {}));
  }
}

export default new SociareCounter();
