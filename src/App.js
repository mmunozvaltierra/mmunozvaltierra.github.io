import './App.css';
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import About from './components/About'

function App() {
  return (
    <div>
      <header className="palette2-background px-3">
        <NavBar></NavBar>
      </header>
        <Intro></Intro>
        <About></About>
    </div>
  );
}

export default App;
