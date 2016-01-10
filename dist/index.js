'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = require('request');
var cheerio = require('cheerio');

var Settings = require('./settings.js');
var Extractor = require('./extractor.js');
var Configurable = require('./configurable.js');

var CPBAPI = function () {
  function CPBAPI() {
    _classCallCheck(this, CPBAPI);
  }

  _createClass(CPBAPI, [{
    key: '_createItemObject',
    value: function _createItemObject(item) {
      return {
        title: Extractor.getTitle(item),
        cover: Extractor.getCover(item),
        seeds: Extractor.getSeeds(item),
        leechs: Extractor.getLeechs(item),
        size: Extractor.getSize(item),
        torrent: Extractor.getTorrentURL(item)
      };
    }
  }, {
    key: '_createPagination',
    value: function _createPagination(pagination) {
      return {
        next: pagination.find('a:last-child').attr('href')
      };
    }
  }, {
    key: '_crawl',
    value: function _crawl(URI) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        request(URI, function (err, res, html) {
          if (err) reject(err);

          var $ = cheerio.load(html);
          var $items = $('#gauche').children('.ligne1, .ligne0');

          var items = [];
          $items.each(function (sum, item) {
            items.push(_this._createItemObject($(item)));
          });

          var pagination = _this._createPagination($('#pagination'));
          resolve({ items: items, pagination: pagination });
        });
      });
    }
  }, {
    key: 'Search',
    value: function Search(query, options) {
      var params = Configurable.get(Object.assign({ scope: 'movies', language: 'FR' }, options));
      var URL = Settings.DOMAIN + '/recherche/' + params.scope + params.language + '/' + encodeURI(query.toLowerCase()) + '.html';
      return this._crawl(URL);
    }
  }, {
    key: 'Latest',
    value: function Latest(options) {
      var params = Configurable.get(Object.assign({ scope: 'movies', language: 'FR' }, options));
      var URL = Settings.DOMAIN + '/top-100.php?filtre=' + params.scope + params.language;
      return this._crawl(URL);
    }
  }]);

  return CPBAPI;
}();

module.exports = CPBAPI;