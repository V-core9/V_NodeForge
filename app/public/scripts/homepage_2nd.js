
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// <:🎨:> ColorScheme ]>- - - - - 
const vColorsScheme = {
  light: {
    main: "#000000",
    mainBg: "#F0F0F0",
  },
  dark: {
    main: "#F0F0F0",
    mainBg: "#102030",
  },
  custom: {
    main: "#607d8b",
    mainBg: "linear-gradient( 45deg #ff000047, #00000000 )",
  }
};

// <:🔥:> LOGO ]>- - - - - 
const V_Logo = {
  _elem: null,

  info: {
    version: 1,
    description: `Just a basic V logo just to have something to start with`
  },

  options: {
    mode: "dev",             // [ dev  ||  live ] * dev is the one adding debug lines
    elem_id: "v_logo",        // [ <string> ]      * just an ID to add to elem
    color_scheme: vColorsScheme.custom,     // [ light || dark || custom ]
    drawing_delay: 10,       // [ miliseconds ] 
    size: "parent",           // [ parent || custom ]   
  },

  data: {
    width: 750,
    height: 750,
    lines_count: 20,
    lines_drawn: 0,
    width02: null,
    width04: null,
    width06: null,
    width08: null,
    height02: null,
    height08: null,
    calcDimensions() {

      //? 1st < X=[ 0 =>  width02 ] , Y=[ 0 => height02 ] >
      //? 2st < X=[ width08 =>  width ] , Y=[ 0 => height02 ] >
      //? 3st < X=[ width04 =>  width06 ] , Y=[ height08 => height ] >
      V_Logo.data.width02 = V_Logo.data.width * 0.2;
      V_Logo.data.width04 = V_Logo.data.width * 0.4;
      V_Logo.data.width06 = V_Logo.data.width * 0.6;
      V_Logo.data.width08 = V_Logo.data.width * 0.8;
      V_Logo.data.height02 = V_Logo.data.height * 0.2;
      V_Logo.data.height08 = V_Logo.data.height * 0.8;

      V_Logo.data.lines_count = V_Logo.data.width02;
      console.log(V_Logo.data.lines_count + " Lines to print ::");
    }
  },

  template() {
    var response = `<svg id="${V_Logo.options.elem_id}"width="${V_Logo.data.width}" height="${V_Logo.data.height}" viewBox="0 0 ${V_Logo.data.width} ${V_Logo.data.height}" xmlns="http://www.w3.org/2000/svg" style="background: ${V_Logo.options.color_scheme.mainBg};background-size: 100% 200%; background-position: center bottom; padding: 10px;">`;


    if (V_Logo.options.mode === "dev") {
      response += `<rect width="${V_Logo.data.width02}" height="${V_Logo.data.height02}" stroke='${V_Logo.options.color_scheme.main}' fill='transparent'/>
                  <rect width="${V_Logo.data.width02}" height="${V_Logo.data.height02}" x="${V_Logo.data.width08}"  stroke='${V_Logo.options.color_scheme.main}' fill='transparent'/>
                  <rect width="${V_Logo.data.width02}" height="${V_Logo.data.height02}" x="${V_Logo.data.width04}" y="${V_Logo.data.height08}"  stroke='${V_Logo.options.color_scheme.main}' fill='transparent'/>
        
                  <line x1="0" y1="0" x2="${V_Logo.data.width04}" y2="${V_Logo.data.height08}" stroke="${V_Logo.options.color_scheme.main}" />
                  <line x1="0" y1="${V_Logo.data.height02}" x2="${V_Logo.data.width04}" y2="${V_Logo.data.height}" stroke="${V_Logo.options.color_scheme.main}" />
                  <line x1="${V_Logo.data.width02}" y1="0" x2="${V_Logo.data.width06}" y2="${V_Logo.data.height08}" stroke="${V_Logo.options.color_scheme.main}" />
                  <line x1="${V_Logo.data.width02}" y1="${V_Logo.data.height02}" x2="${V_Logo.data.width06}" y2="${V_Logo.data.height}" stroke="${V_Logo.options.color_scheme.main}" />
        
                  <line x1="${V_Logo.data.width08}" y1="0" x2="${V_Logo.data.width04}" y2="${V_Logo.data.height08}" stroke="${V_Logo.options.color_scheme.main}" />
                  <line x1="${V_Logo.data.width08}" y1="${V_Logo.data.height02}" x2="${V_Logo.data.width04}" y2="${V_Logo.data.height}" stroke="${V_Logo.options.color_scheme.main}" />
                  <line x1="${V_Logo.data.width}" y1="0" x2="${V_Logo.data.width06}" y2="${V_Logo.data.height08}" stroke="${V_Logo.options.color_scheme.main}" />
                  <line x1="${V_Logo.data.width}" y1="${V_Logo.data.height02}" x2="${V_Logo.data.width06}" y2="${V_Logo.data.height}" stroke="${V_Logo.options.color_scheme.main}" />`;
    }
    response += `</svg>`;
    return response;
  },

  animation_interval: null,

  drawAnimationStart() {
    console.log(V_Logo.options.drawing_delay + "ms");
    V_Logo.animation_interval = setInterval(() => {
      V_Logo.drawLine();
    }, V_Logo.options.drawing_delay);
  },

  drawLine() {
    V_Logo.data.lines_drawn = V_Logo.data.lines_drawn + 1;
    console.log(V_Logo.data.lines_drawn);

    if (V_Logo.data.lines_drawn >= V_Logo.data.lines_count) {
      V_Logo.drawAnimationStop();
    } else {

      var temp_x1, temp_y1, temp_x2, temp_y2 = 0;
      var maybeAlterDirection = "";


      if (V_Logo.data.lines_drawn < (V_Logo.data.lines_count / 2)) {
        // LEFT SIDE RANDOM LINES ------
        temp_x1 = 0 + getRandomInt(V_Logo.data.width02);
        temp_y1 = 0 + getRandomInt(V_Logo.data.height02);
        temp_x2 = V_Logo.data.width04 + getRandomInt(V_Logo.data.width02);
        temp_y2 = V_Logo.data.height08 + getRandomInt(V_Logo.data.height02);
      } else {
        // RIGHT SIDE RANDOM LINES -----
        temp_x1 = V_Logo.data.width04 + getRandomInt(V_Logo.data.width02);
        temp_y1 = V_Logo.data.height08 + getRandomInt(V_Logo.data.height02);
        temp_x2 = V_Logo.data.width08 + getRandomInt(V_Logo.data.width02);
        temp_y2 = 0 + getRandomInt(V_Logo.data.height02);
        maybeAlterDirection = "alter_direction_animation";
      }
      console.log(`x1:${temp_x1}|y1:${temp_y1}|:|x2:${temp_x2}|y2:${temp_y2}`);
      V_Logo._elem.insertAdjacentHTML('beforeend', `<line ${(maybeAlterDirection !== "") ? ("class='" + maybeAlterDirection + "'") : ""} x1="${temp_x1}" y1="${temp_y1}" x2="${temp_x2}" y2="${temp_y2}" stroke="${V_Logo.options.color_scheme.main}" stroke-width="${getRandomInt(4)}" stroke-dasharray="${getRandomInt(100)} ${getRandomInt(50)} ${getRandomInt(200)} ${getRandomInt(100)} ${getRandomInt(50)} ${getRandomInt(50)} ${getRandomInt(100)} ${getRandomInt(200)} ${getRandomInt(200)} " opacity="0.${getRandomInt(100)}" style=" animation-duration: ${(getRandomInt(5) + 0.5) * 2}s; "/>`);

    }
  },

  drawAnimationStop() {
    console.log("Done Drawing :: Interval STOP");
    clearInterval(V_Logo.animation_interval);
    V_Logo.animation_interval = null;
  },

  setWidth(length = 0) {
    V_Logo.data.width = length;
  },

  setHeight(length = 0) {
    V_Logo.data.height = length;
  },

  printLogo(parentElementSelector = null) {
    if (parentElementSelector === null) {
      console.log('cant be empty');
      return false;
    }

    var parentElemTEMP = document.querySelector(parentElementSelector);

    if (V_Logo.options.size === "parent") {
      V_Logo.setWidth(parentElemTEMP.getBoundingClientRect().width);
      V_Logo.setHeight((parentElemTEMP.getBoundingClientRect().width != 0) ? parentElemTEMP.getBoundingClientRect().width : parentElemTEMP.getBoundingClientRect().height);
    }

    V_Logo.data.calcDimensions();

    parentElemTEMP.insertAdjacentHTML('beforeend', V_Logo.template());

    V_Logo._elem = document.querySelector(`#${V_Logo.options.elem_id}`);

    V_Logo.drawAnimationStart();
  }

};

V_Logo.printLogo("#hero_side_logo");
