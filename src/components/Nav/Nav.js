import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <NavLink className='go-home' to="/">
        <button>Home</button>
      </NavLink>
      <NavLink className='go-local-ip' to="/about">
        <button>Local IP</button>
      </NavLink>
      <NavLink className='go-search-ip' to="/about">
        <button>Search IP</button>
      </NavLink>
      <NavLink className='go-saved-ips' to="/saved-ip">
        <button>Saved IPs</button>
      </NavLink>
    </div>
  );
}

export default Nav;