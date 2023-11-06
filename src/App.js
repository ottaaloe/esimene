import logo from './logo.svg';
import './App.css';
import Luuletus1 from './Luuletus1';
import Luuletus2 from './Luuletus2';

function App() {
  console.log('aa');
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
          Learn React baa
        </a>
        <Luuletus1/>
        <div>-----------------</div>
        <Luuletus2/>
      </header>
    </div>
  );
}

export default App;
