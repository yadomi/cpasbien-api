cpasbien-api
===========

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![TravisCI](https://img.shields.io/travis/yadomi/cpasbien-api/master.svg)](https://travis-ci.org/yadomi/cpasbien-api)
[![Version](https://img.shields.io/npm/v/cpasbien-api.svg)](https://www.npmjs.com/package/cpasbien-api)
[![Dependency Status](https://gemnasium.com/badges/github.com/yadomi/cpasbien-api.svg)](https://gemnasium.com/github.com/yadomi/cpasbien-api)

---

Introduction
------------

Scrapper API for french torrent site [cpasbien.cm](http://www.cpasbien.cm)

Usage
-----

```js

const CPBAPI = require('cpasbien-api')
const api = new CPBAPI()

api.Latest()
  .then(console.log.bind(console))

api.Search('harry poter', {language: 'EN'})
  .then(console.log.bind(console))

api.Search('fringe', {scope: 'tvshow'})
  .then(console.log.bind(console))

```

---

Disclaimer
---------

I'm not the author of cpasbien.cm, nor me or any contributor are responsable of any eventual illegal use of this software.

Changelog
---------

### 1.1.1

- Update domain extension to .cm

### 1.1.0

- The `Latest()` method now which now return the latest movies or tvshow
- The previous behavor of `Latest()` is now `Top()` which return the top 100

### 1.0.0

- Initial release

