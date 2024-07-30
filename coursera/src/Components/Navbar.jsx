const Navbar = () => {
    return(
        <nav>
            <div className="logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/8/81/20160616025801%21Verizon_2015_logo_-vector.svg/120px-Verizon_2015_logo_-vector.svg.png" ></img>
            </div>
            <ul className="navlist">
              <li href="https://google.com">Menu</li>
              <li href="https://google.com">Location</li>
              <li href="https://google.com">About</li>
              <li href="https://google.com">Contact</li>
            </ul>
            <button>Login</button>
          </nav>
    );
    };
    
    export default Navbar;