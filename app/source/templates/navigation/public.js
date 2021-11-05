navigationPublic = () => {
  return `
  <nav>
    <h1>
      <a href="/">
      <svg id="v_logo" width="65" height="65" viewBox="0 0 125 125" xmlns="http://www.w3.org/2000/svg" style="background: linear-gradient( 45deg #ff000047, #00000000 );background-size: 100% 200%; background-position: center bottom; padding: 10px;">
          <rect width="25" height="25" stroke="#607d8b" fill="transparent"></rect>
          <rect width="25" height="25" x="100" stroke="#607d8b" fill="transparent"></rect>
          <rect width="25" height="25" x="50" y="100" stroke="#607d8b" fill="transparent"></rect>

          <line x1="0" y1="0" x2="50" y2="100" stroke="#607d8b"></line>
          <line x1="0" y1="25" x2="50" y2="125" stroke="#607d8b"></line>
          <line x1="25" y1="0" x2="75" y2="100" stroke="#607d8b"></line>
          <line x1="25" y1="25" x2="75" y2="125" stroke="#607d8b"></line>

          <line x1="100" y1="0" x2="50" y2="100" stroke="#607d8b"></line>
          <line x1="100" y1="25" x2="50" y2="125" stroke="#607d8b"></line>
          <line x1="125" y1="0" x2="75" y2="100" stroke="#607d8b"></line>
          <line x1="125" y1="25" x2="75" y2="125" stroke="#607d8b"></line>
        </svg>
      </a>
    </h1>
    <ul>
      <li>
        <a href="/">🏡 Home</a>
      </li>
      <li>
        <a href="/about">📑 About</a>
      </li>
      <li>
        <a href="/author">⚡ Author</a>
      </li>
      <li>
        <a href="/login">🔐 Login</a>
      </li>
      <li>
        <a href="/register">📦 Register</a>
      </li>
    </ul>
  </nav>`;
};

module.exports = navigationPublic;
