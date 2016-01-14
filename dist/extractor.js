'use strict'

var _createClass = function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }()

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Settings = require('./settings.js')
var urlify = require('urlify').create({
  spaces: '-',
  nonPrintable: '-',
  trim: true
})

var Extractor = function () {
  function Extractor () {
    _classCallCheck(this, Extractor)
  }

  _createClass(Extractor, [{
    key: 'getTorrentURL',
    value: function getTorrentURL (item) {
      var torrentName = urlify(this.getTitle(item).toLowerCase())
      return Settings.DOMAIN + '/telechargement/' + torrentName + '.torrent'
    }
  }, {
    key: 'getTitle',
    value: function getTitle (item) {
      return item.find('.titre').text()
    }
  }, {
    key: 'getSeeds',
    value: function getSeeds (item) {
      return item.find('.up .seed_ok').text()
    }
  }, {
    key: 'getLeechs',
    value: function getLeechs (item) {
      return item.find('.down').text()
    }
  }, {
    key: 'getSize',
    value: function getSize (item) {
      return item.find('.poid').text()
    }
  }, {
    key: 'getCover',
    value: function getCover (item) {
      var coverName = urlify(this.getTitle(item).toLowerCase())
      return Settings.DOMAIN + '/_pictures/' + coverName + '.jpg'
    }
  }])

  return Extractor
}()

module.exports = new Extractor()
