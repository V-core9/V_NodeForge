module.exports = [

  {
    //? <[⚡]> #1 :: MAIN PAGE LINK   <]-----
    name: "homepage",
    status: "public",
    path: "/",
    alt_path_list: ["/index", "/index.html", "/home", "/landing"],
    do: () => {
      console.log("MAIN PAGE LINK =>> homepage");
    }
    //! <[⚡]> - - - - - - - - - - - - - - - - - - - - 
  },

  {
    //?<[💧]>> #2 :: About the application  <]-----
    name: "about_main",
    status: "public",
    path: "/about",
    alt_path_list: ["/about.html", "/about_app", "/about-app", "/about-us", "/more-info", "/more_details"],
    do: () => {
      console.log(" About the application =>> homepage");
    }
    //!<[💧]> - - - - - - - - - - - - - - - - - - - - 
  },

  {
    //?<[🚨]>> #3 :: Login Page         <]-----
    name: "login",
    status: "public",
    path: "/login",
    alt_path_list: ["/login.html", "/sign_in", "/sign_in.html"],
    do: () => {
      console.log("Login Page =>> login");
    }
    //!<[🚨]> - - - - - - - - - - - - - - - - - - - - 
  },

  {
    //?<[🌠]]>> #4 :: Register Page         <]-----
    name: "register",
    status: "public",
    path: "/register",
    alt_path_list: ["/register.html", "/sign-up", "/sign-up.html", "/sign_up", "/new-user", "/register_user", "/new_register", "/new_user", "/new-register", "/register-user"],
    do: () => {
      console.log("Register Page  =>> register");
    }
    //!<[🌠]]>> #4 :: Register Page         <]-----
  },

  {
    //?<[🔥]>> #5 :: V_App         <]-----
    name: "v_app",
    status: "public",
    path: "/v_app",
    alt_path_list: ["/vApp.html", "/v_client", "/v_client.html"],
    do: () => {
      console.log("V_App PAGE =>> v_app");
    }
    //!<[🔥]>> #5 :: V_App         <]-----
  },

  {
    //?<[🤠]]>> #6 :: Author Page        <]-----
    name: "V-core9",
    status: "public",
    path: "/V-core9",
    alt_path_list: ["/V-core9.html", "/v-core9", "/v-core9.html", "/V_core9", "/V_core9.html", "/Vc9", "/Vc9.html", "/author", "/author.html", "/main_author", "/main-author", "/main_author.html", "/main-author.html", "/author-main", "/author-main.html"],
    do: () => {
      console.log("V-core9 Page =>> author");
    }
    //!<[🤠]]>> #6 :: Author Page        <]-----
  }

];
