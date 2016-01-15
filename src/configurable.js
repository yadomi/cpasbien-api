class Configurable {

  get (options) {
    const queryParams = {
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

}

module.exports = new Configurable()
