'use strict'

var _createClass = function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }()

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Configurable = function () {
  function Configurable () {
    _classCallCheck(this, Configurable)
  }

  _createClass(Configurable, [{
    key: 'get',
    value: function get (options) {
      var queryParams = {
        movies: {
          scope: 'films',
          language: {
            EN: '-vostfr',
            FR: '-french'
          }
        },
        tvshow: {
          scope: 'series',
          language: {
            EN: '-vostfr',
            FR: '-francaise'
          }
        }
      }
      return {
        scope: queryParams[options.scope].scope,
        language: queryParams[options.scope].language[options.language]
      }
    }
  }])

  return Configurable
}()

module.exports = new Configurable()
