import * as math from './js/math.js';
export const doAdd = (a, b) => math.add(a, b);
export const doSubstract = (a, b) => math.substract = (a, b);
export const doMultiply = (a, b) => math.multiply = (a, b );
export const doDevide = (a, b) => math.divide = (a, b);

function App() {
  console.log(doAdd(1,2));
  console.log(doSubstract(1,2));
  console.log(doMultiply(1,2));
  console.log(doDevide(1,2));

}
export default App;

/*import logo from './logo.svg';
import './App.css';

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

export default App;
*/