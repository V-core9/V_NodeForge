navigationPublic = () => {
  return `
  <nav>
    <h1>${document.querySelector('title').innerText}</h1>
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
