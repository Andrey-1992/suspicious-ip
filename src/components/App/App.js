import './App.css';
import { Route, Switch } from 'react-router-dom';
import IpInfo from '../IpInfo/IpInfo';
import IpContainer from '../IpContainer/IpContainer';
import Header from '../Header/Header';
import Error from '../Error/Error';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-section">
        <Switch>
          <Route exact path="/" render={() => <IpInfo />}/>
          <Route exact path="/saved-ip" render={() => <IpContainer />}/>
          <Route path="*" render={() => <Error />}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
