'use strict';

import counter from '../src/index.js';

describe('Counter', () => {
  describe('constructor', () => {
    it('should define all the services', () => {
      expect(counter.facebook).to.not.be.undefined;
      expect(counter.twitter).to.not.be.undefined;
      expect(counter.pinterest).to.not.be.undefined;
      expect(counter.linkedin).to.not.be.undefined;
      expect(counter.googleplus).to.not.be.undefined;
    });
  });

  describe('getCounts', () => {
    let url = 'http://example.com?foo',
        facebook, twitter, pinterest, linkedin, googleplus;

    beforeEach(() => {
      facebook = sinon.stub(counter.facebook, 'getCount', () => Promise.resolve(1));
      twitter = sinon.stub(counter.twitter, 'getCount', () => Promise.resolve(2));
      pinterest = sinon.stub(counter.pinterest, 'getCount', () => Promise.resolve(3));
      linkedin = sinon.stub(counter.linkedin, 'getCount', () => Promise.resolve(4));
      googleplus = sinon.stub(counter.googleplus, 'getCount', () => Promise.resolve(5));
    });

    afterEach(() => {
      facebook.restore();
      twitter.restore();
      pinterest.restore();
      linkedin.restore();
      googleplus.restore();
    });

    it('should get counts for the url provided from each network provided', () => {
      return counter.getCounts(url, { networks: ['facebook', 'twitter'] })
        .then(counts => {
          expect(facebook).to.have.been.calledOnce;
          expect(twitter).to.have.been.calledOnce;
          expect(pinterest).to.not.have.been.called;
          expect(linkedin).to.not.have.been.called;
          expect(googleplus).to.not.have.been.called;
          expect(facebook).to.have.been.calledWithExactly(url);
          expect(twitter).to.have.been.calledWithExactly(url);
          expect(counts).to.deep.equal({
            facebook: 1,
            twitter: 2
          });
        });
    });

    it('should default to all networks', () => {
      return counter.getCounts(url)
        .then(counts => {
          expect(facebook).to.have.been.calledOnce;
          expect(twitter).to.have.been.calledOnce;
          expect(pinterest).to.have.been.calledOnce;
          expect(linkedin).to.have.been.calledOnce;
          expect(googleplus).to.have.been.calledOnce;
          expect(counts).to.deep.equal({
            facebook: 1,
            twitter: 2,
            pinterest: 3,
            linkedin: 4,
            googleplus: 5
          });
        });
    });

    it('should strip query strings if config specifies', () => {
      return counter.getCounts(url, { networks: ['facebook'], omitQuery: true })
        .then(counts => {
          expect(facebook).to.have.been.calledWithExactly('http://example.com');
        });
    });
  });
});
