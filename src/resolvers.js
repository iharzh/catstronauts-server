const resolvers = {
  Query: {
    tracksForHome: (_, __, {dataSources}) => {
      return dataSources.trackApi.getTracksForHome();
    },
    track: (_, {id}, {dataSources}) => {
      return dataSources.trackApi.getTrack(id)
    }
  },
  Mutation: {
    incrementTrackViews: async (_, {id}, {dataSources}) => {
      try {


      const track = await dataSources.trackApi.incrementTrackViews(id)

      return {
        code: 200,
        success: true,
        message: `Successfully incremented number of views for track ${id}`,
        track
      }
      } catch(err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null
        }
      }
    }
  },
  Track: {
    author: ({authorId}, _, {dataSources}) => {
      return dataSources.trackApi.getAuthor(authorId)
    },
    modules: ({id}, _, {dataSources}) => {
      return dataSources.trackApi.getTrackModules(id)
    },
    durationInSeconds: ({length}) => {
      return length
    }
  },
  Module: {
    durationInSeconds: ({ length }) => length,
  },
}

module.exports = resolvers;
