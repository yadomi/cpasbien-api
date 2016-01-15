cpasbien-api
===========

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![TravisCI](https://img.shields.io/travis/yadomi/cpasbien-api/master.svg)](https://travis-ci.org/yadomi/cpasbien-api)
[![Version](https://img.shields.io/npm/v/cpasbien-api.svg)](https://www.npmjs.com/package/cpasbien-api)

---

Introduction
------------

Scrapper API for french torrent site [cpasbien.io](http://www.cpasbien.io)

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

I'm not the author of cpasbien.io, nor me or any contributor are responsable of any eventual illegal use of this software.
