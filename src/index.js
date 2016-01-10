'use strict'

const request = require('request')
const cheerio = require('cheerio')

const Settings = require('./settings.js')
const Extractor = require('./extractor.js')
const Configurable = require('./configurable.js')

class CPBAPI {

  _createItemObject (item) {
    return {
      title: Extractor.getTitle(item),
      cover: Extractor.getCover(item),
      seeds: Extractor.getSeeds(item),
      leechs: Extractor.getLeechs(item),
      size: Extractor.getSize(item),
      torrent: Extractor.getTorrentURL(item)
    }
  }

  _createPagination (pagination) {
    return {
      next: pagination.find('a:last-child').attr('href')
    }
  }

  _crawl (URI) {
    return new Promise((resolve, reject) => {
      request(URI, (err, res, html) => {
        if (err) reject(err)

        const $ = cheerio.load(html)
        const $items = $('#gauche').children('.ligne1, .ligne0')

        const items = []
        $items.each((sum, item) => {
          items.push(this._createItemObject($(item)))
        })

        const pagination = this._createPagination($('#pagination'))
        resolve({items, pagination})
      })
    })
  }

  Search (query, options) {
    const params = Configurable.get(Object.assign({scope: 'movies', language: 'FR'}, options))
    const URL = `${Settings.DOMAIN}/recherche/${params.scope}${params.language}/${encodeURI(query.toLowerCase())}.html`
    return this._crawl(URL)
  }

  Latest (options) {
    const params = Configurable.get(Object.assign({scope: 'movies', language: 'FR'}, options))
    const URL = `${Settings.DOMAIN}/top-100.php?filtre=${params.scope}${params.language}`
    return this._crawl(URL)
  }

}

module.exports.CPBAPI = CPBAPI
