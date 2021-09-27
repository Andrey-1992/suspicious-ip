import './Home.css';
import PropTypes from 'prop-types';
function Home() {
  return (
    <div className="home-view">
      <h2 className="home-header">Welcome !</h2>
      <p className="about-text">This app will allow you to generate a report with
        information from a local or unidentified IP Addresses 
        in your networks, with the opportunity to save 
        reports inside the app.</p>
        <p className="about-text">This app is using 
          <a href="https://ipapi.co/api/#introduction" target="_blank"> ipapi </a> API </p>
    </div>
  );
}

Home.propTypes = {
  Home: PropTypes.element,
}

export default Home;