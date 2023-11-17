import logo from './logo.svg';
import './App.css';
import UserList from './component/UserList';
import ShoppingList from './component/ShoppingList';

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
      <ShoppingList />
    </div>
  );
}
