module.exports = function () {
  var faker = require("faker");
  var lodash = require("lodash");
  return {
    episodes: lodash.times(100, function (n) {
      return {
        id: faker.name.id(),
        title: faker.name.title(),
        members: faker.name.members(),
        thumbnail: faker.name.thumbnail(),
        description: faker.name.description(),
        published_at: faker.name.published_at(),
        file: {
          url: faker.name.url(),
          type: faker.name.type(),
          duration: faker.name.duration(),
        },
      };
    }),
  };
};
