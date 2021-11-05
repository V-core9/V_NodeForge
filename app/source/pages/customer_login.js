module.exports = {
  name: "customer_login",
  prime_path: "/login",
  alt_paths: ["/customer_login", "/customer-login", "/user_login", "/user-login",],
  template_file: "public/login.html",
  resources: [
    "/style/homepage.css",
    "/style/customer_register.css",
    "/scripts/V_App_Root.js",
  ]
};
