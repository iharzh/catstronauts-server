const {RESTDataSource} = require('apollo-datasource-rest');

class TrackApi extends RESTDataSource {
  constructor() {
    super();

    this.baseUrl = 'https://odyssey-lift-off-rest-api.herokuapp.com';
  }

  getTracksForHome() {
    return this.get(`${this.baseUrl}/tracks`)
  }

  getAuthor(authorId) {
    return this.get(`${this.baseUrl}/author/${authorId}`)
  }

  getTrack(trackId) {
    return this.get(`${this.baseUrl}/track/${trackId}`)
  }

  getTrackModules(trackId) {
    return this.get(`${this.baseUrl}/track/${trackId}/modules`)
  }

  incrementTrackViews(trackId) {
    return this.patch(`${this.baseUrl}/track/${trackId}/numberOfViews`)
  }
}

module.exports = TrackApi;
