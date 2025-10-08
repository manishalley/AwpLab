import logo from './logo.svg';
import './App.css';
import C1 from './components/c1';
import C2 from './components/c2';
import C3 from './components/c3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://media.istockphoto.com/id/868627694/vector/hypnotic-circles-abstract-white-black-optical-illusion-vector-spiral-swirl-pattern-background.jpg?s=612x612&w=0&k=20&c=ma0PRJtagAnVVd9frDu1te1Ae0sI1A7FBs9Y5sM3Tvs=" className="App-logo" alt="logo" />
        <p>
          Look <code>into the</code>  image.
          <C1></C1>
          <C2></C2>
          <C3></C3>
        </p>
        <a
          className="App-link"
          href="https://www.ironman.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wanna be an IRONMAN?
        </a>
      </header>
    </div>
  );
}

export default App;
