import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <NavLink className='go-home' to="/">
        <button className="nav-buttons">Home</button>
      </NavLink>
      <NavLink className='go-local-ip' to="local-ip">
        <button className="nav-buttons">Local IP</button>
      </NavLink>
      <NavLink className='go-search-ip' to="/searched-ip">
        <button className="nav-buttons">Search IP</button>
      </NavLink>
      <NavLink className='go-saved-ips' to="/saved-ip">
        <button className="nav-buttons">Saved IPs</button>
      </NavLink>
    </div>
  );
}

export default Nav;