const HeaderComp = ( ) => {

  return (
    <header className="header">
      <div className="logo-container">
        <a href="/index.html">
          <img className="logo" src={require("/assets/image/logo.png")} />
        </a>
      </div>

      <nav className="header-navbar">
        <ul>
          <li>Home</li>
          <li>Offers</li>
          <li>Account</li>
          <li>Help</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </li>
        </ul>
      </nav>
    </header>
  );
};



export default HeaderComp;