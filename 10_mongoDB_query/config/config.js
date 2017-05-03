var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: '10-mongodb-query'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://127.0.0.1:27017/miBaseDeDatosMongo'
  },

  test: {
    root: rootPath,
    app: {
      name: '10-mongodb-query'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/10-mongodb-query-test'
  },

  production: {
    root: rootPath,
    app: {
      name: '10-mongodb-query'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/10-mongodb-query-production'
  }
};

module.exports = config[env];
