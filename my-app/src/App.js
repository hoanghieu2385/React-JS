import logo from './logo.svg';    //important
import './App.css';     //important
import Pricing from './component/Pricing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default function MyApp() {
  return(
    <div className='App'>
      <Pricing />
    </div>
  );
}
