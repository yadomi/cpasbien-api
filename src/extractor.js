const Settings = require('./settings.js')
const urlify = require('urlify').create({
  spaces: '-',
  nonPrintable: '-',
  trim: true
})

class Extractor {
  getTorrentURL (item) {
    const torrentName = urlify(this.getTitle(item).toLowerCase())
    return `${Settings.DOMAIN}/telechargement/${torrentName}.torrent`
  }
  getTitle (item) {
    return item.find('.titre').text()
  }
  getSeeds (item) {
    return item.find('.up .seed_ok').text()
  }
  getLeechs (item) {
    return item.find('.down').text()
  }
  getSize (item) {
    return item.find('.poid').text()
  }
  getCover (item) {
    const coverName = urlify(this.getTitle(item).toLowerCase())
    return `${Settings.DOMAIN}/_pictures/${coverName}.jpg`
  }
}

module.exports = new Extractor()
