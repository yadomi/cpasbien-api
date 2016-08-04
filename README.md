cpasbien-api
===========

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

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

I'm not the author of cpasbien.io, nor me or any contributor are responsable of any eventual illegal use of this software.
