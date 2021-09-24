import './App.css';
import IpInfo from '../IpInfo/IpInfo';
import Header from '../Header/Header';
import Error from '../Error/Error';

function App() {
  return (
    <div className="App">
      <Header />
      <IpInfo />
      <Error />
    </div>
  );
}

export default App;
