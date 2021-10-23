const v_config = {
  mode: "dev",
  host: "localhost",
  port: 4141,
  protocol: "https",
  getAppLocation() {
    return `${v_config.protocol}://${v_config.host}:${v_config.port}/`
  }
};


const spdy = require("spdy");
const express = require("express");
const fs = require("fs");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

const app = express();

app.use(express.static("public"));

//app.get("/", async (req, res) => { homepage(req, res); });


const V_core9 = {

  autostart: true,

  _sitemap: [
    {
      name: "home",
      prime_path: "/",
      alt_paths: ["/index", "/homepage", "/home"],
      template_file: "public/index.html",
      resources: [
        "/style/homepage.css",
        "/scripts/homepage_1st.js",
        "/scripts/homepage_2nd.js",
        "/images/nodejs.png"
      ]
    },
    {
      name: "about",
      prime_path: "/about",
      alt_paths: ["/about-app", "/about_app", "/more_info", "/details",],
      template_file: "public/about.html",
      resources: [
        "/style/homepage.css",
        "/scripts/homepage_1st.js",
        "/scripts/homepage_2nd.js",
        "/images/nodejs.png"
      ]
    },
    {
      name: "customer_login",
      prime_path: "/login",
      alt_paths: ["/customer_login", "/customer-login", "/user_login", "/user-login",],
      template_file: "public/login.html",
      resources: [
        "/style/homepage.css",
        "/scripts/homepage_1st.js",
        "/scripts/homepage_2nd.js",
        "/images/nodejs.png"
      ]
    },
    {
      name: "customer_register",
      prime_path: "/register",
      alt_paths: ["/customer_register", "/customer-register", "/user_register", "/user-register",],
      template_file: "public/register.html",
      resources: [
        "/style/homepage.css",
        "/scripts/homepage_1st.js",
        "/scripts/homepage_2nd.js",
        "/images/nodejs.png"
      ]
    },
    {
      name: "author",
      prime_path: "/V-core9",
      alt_paths: ["/author", "/v_core9"],
      template_file: "public/author.html",
      resources: [
        "/style/homepage.css",
        "/scripts/homepage_1st.js",
        "/scripts/homepage_2nd.js",
        "/images/nodejs.png"
      ]
    }
  ],

  loadPage: async (pageName, req, res) => {
    for (let i = 0; i < V_core9._sitemap.length; i++) {
      const pageItem = V_core9._sitemap[i];
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
    V_core9._sitemap.forEach(item => {
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
).listen(v_config.port, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log(`Listening @>   ${v_config.getAppLocation()}`);
});
