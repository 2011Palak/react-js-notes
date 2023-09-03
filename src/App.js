import logo from './logo.svg';
import './App.css';
import './palak.css';
import Button from './Button';



function App() {
  return (
    <div className="first">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hey everyone, welcome to devtown</h1>
        <div>
          devtown clses
        </div>
      <Button />
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

export default App;
