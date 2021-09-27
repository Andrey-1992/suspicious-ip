import './Header.css';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';

function Header() {
  return (
    <div className="header">
      <h1>Suspicious IP</h1>
      <Nav />
    </div>
  );
}

Header.propTypes = {
  Nav: PropTypes.element
}

export default Header;