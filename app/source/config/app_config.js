const v_config = {
  mode: "dev",
  host: "localhost",
  port: 4141,
  protocol: "https",
  getAppLocation() {
    return `${v_config.protocol}://${v_config.host}:${v_config.port}/`
  }
};

module.exports = v_config;
