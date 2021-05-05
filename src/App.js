import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I made a new change!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" class="btn btn-primary">Button</button>
      </header>
    </div>
  );
}

export default App;
