import './App.css';
import NavBar from './components/NavBar'
import About from './components/About'

function App() {
  return (
    <div>
      <header className="bg-light px-3">
        <NavBar></NavBar>
      </header>
        <About></About>
    </div>
  );
}

export default App;
