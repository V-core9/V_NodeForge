

const spdy = require("spdy");
const express = require("express");
const compression = require("compression");
const fs = require("fs");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

const app = express();
app.use(compression());
app.use(express.static("public"));

//app.get("/", async (req, res) => { homepage(req, res); });


const V_core9 = {

  v_config : require("../config/app.cfg"),
  autostart: true,

  _pages_list: require('./source/pages/_pages_list'),

  loadPage: async (pageName, req, res) => {
    for (let i = 0; i < V_core9._pages_list.length; i++) {
      const pageItem = V_core9._pages_list[i];
      if (pageItem.name === pageName) {
        //console.log(`FOUND A PAGE BY NAME: ${pageItem.name}`);

        try {
          if (res.push) {pageItem.resources.forEach(async (file) => {
              res.push(file, {}).end(await readFile(`public${file}`));
            });
          }
      
          res.writeHead(200);
          res.end(await readFile(pageItem.template_file));
        } catch (error) {
          res.status(500).send(error.toString());
        }
      }
    }
  },

  createRoutes: () => {
    V_core9._pages_list.forEach(item => {
      V_core9.createSingleRoutes(item.prime_path, item.name);

      item.alt_paths.forEach(altRoute => {
        V_core9.createSingleRoutes(altRoute, item.name);
      });

    });
  },

  createSingleRoutes: (routePath, pageName) => {
    app.get(routePath, async (req, res) => { V_core9.loadPage(pageName, req, res); });
  },

  init: () => {
    V_core9.createRoutes();
  }
};

if (V_core9.autostart === true) V_core9.init();

spdy.createServer(
  {
    key: fs.readFileSync("./_system/.certs/server.key"),
    cert: fs.readFileSync("./_system/.certs/server.crt")
  },
  app
).listen(V_core9.v_config.port, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log(`Listening @>   ${V_core9.v_config.getAppLocation()}`);
});
