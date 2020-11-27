import logo from './logo.svg';
import './App.css';

const numn = 23;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          fontSize: 12+30
        }}> Hello World!</p>
        <p>
        {numn}
        {45}
        {numn && 'Truth'}</p>
        <p>{numn ? "Numn is a number" : "Numn isn't a number"}</p>
        <p>{undefined}
        {null}
        {false}
        {true}
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

export default App;
