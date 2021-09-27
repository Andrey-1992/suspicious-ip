import './App.css';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Home from '../Home/Home';
import IpLocal from '../IpLocal/IpLocal';
import IpSearched from '../IpSearched/IpSearched';
import IpContainer from '../IpContainer/IpContainer';
import Error from '../Error/Error';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-section">
        <Switch>
          <Route exact path="/" render={() => <Home />}/>
          <Route exact path="/local-ip" render={() => <IpLocal />}/>
          <Route exact path="/searched-ip" render={() => <IpSearched />}/>
          <Route exact path="/saved-ip" render={() => <IpContainer />}/>
          <Route path="*" render={() => <Error />}/>
        </Switch>
      </main>
    </div>
  )
}

App.propTypes = {
  Header: PropTypes.element,
  IpLocal: PropTypes.element,
  IpSearched : PropTypes.element,
  IpContainer : PropTypes.element,
  Error: PropTypes.element
}

export default App;
