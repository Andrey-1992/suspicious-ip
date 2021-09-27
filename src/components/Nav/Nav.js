import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <NavLink className='go-home' to="/suspicious-ip">
        <p className="nav-buttons">Home</p>
      </NavLink>
      <NavLink className='go-local-ip' to="local-ip">
        <p className="nav-buttons">Local IP</p>
      </NavLink>
      <NavLink className='go-search-ip' to="/searched-ip">
        <p className="nav-buttons">Search IP</p>
      </NavLink>
      <NavLink className='go-saved-ips' to="/saved-ip">
        <p className="nav-buttons">Saved IPs</p>
      </NavLink>
    </div>
  );
}

export default Nav;