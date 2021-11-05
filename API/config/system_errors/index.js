const systemStatusCodes = {
  _200: require('./200'),
  _400: require('./400'),
  _401: require('./401'),
  _404: require('./404'),
  _500: require('./500'),

  $200: () => {
    return systemStatusCodes._200;
  },
  $400: () => {
    return systemStatusCodes._400;
  },
  $401: () => {
    return systemStatusCodes._401;
  },
  $404: () => {
    return systemStatusCodes._404;
  },
  $500: () => {
    return systemStatusCodes._500;
  }
};

module.exports = systemStatusCodes;
