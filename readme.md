# Sociare Counter [![Build Status](https://travis-ci.org/Globobeet/sociare-counter.svg?branch=master)](https://travis-ci.org/Globobeet/sociare-counter) [![Coverage Status](https://coveralls.io/repos/Globobeet/sociare-counter/badge.svg)](https://coveralls.io/r/Globobeet/sociare-counter)

A small NodeJS utility for fetching share counts of a given URL across many popular social networks.


## Installation

Sociare Counter can be installed with [npm](https://npmjs.org/package/sociare-counter)

```
$ npm install --save sociare-counter
```


## Usage Example

```javascript
const sociare = require('sociare-counter');

sociare.getCounts('http://google.com', {
	networks: ['facebook', 'linkedin', 'pinterest']
}).then((counts) => {
	// Do something with the counts
});
```

### ExpressJS endpoint

This example is helpful if you are using the [Sociare](https://npmjs.org/package/sociare) button generator in browser:

```javascript
const sociare = require('sociare-counter');
const app = express();

app.get('/share-counts', (req, res) => {
	sociare.getCounts(req.query.url, {
        networks: req.query.networks.split(','),
        omitQuery: req.query.omitQuery === 'true'
    })
    .then(counts => res.send(counts));
});
```


## API

Sociare Counter has only one method: `sociare.getCounts(url, [options])`, which returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Configurable Options:

| Property | Type | Description |
| -------- | ---- | ----------- |
| `networks` | Array[String] | 	Networks to fetch counts from. Defaults to `['facebook', 'pinterest', 'linkedin', 'googleplus']` |
| `omitQuery` | Boolean | Whether query strings should be stripped from the URL before getting counts. Defaults to `false` |




## Motivation

Getting share counts from all the different social networks is... a pain, to say the least. Wouldn't it be great to have one way to get said counts, and have it always return a standard, known format? Yeah, we thought so too, which is where Sociare Counter comes into play! Simply specify the networks you want counts from and give it a url, it's easy as that!

Sociare Counter currently supports the following networks:

* Facebook
* Pinterest
* LinkedIn
* Google+

### Why no Twitter??

In November of 2015, Twitter [shut down it's public API access to share count data](https://blog.twitter.com/2015/hard-decisions-for-a-sustainable-platform), in favor of it archiving service, GNIP. Until a suitable replacement is found (that does not require additional authentication), this plugin will not be able to return share counts from Twitter.


## Contributing

Pull requests for bug-fixes and additions of other services are always welcome! Please be sure to include any tests for new code & follow the current coding style as best you can.

You can run the test suite with the following command:

```
$ npm test
```


## License

Sociare Counter is distributed under the [MIT license](https://github.com/Globobeet/sociare-counter/blob/master/license.txt).
