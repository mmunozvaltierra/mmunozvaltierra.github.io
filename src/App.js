import './App.css';
import NavBar from './components/NavBar'
import Intro from './components/Intro'

function App() {
  return (
    <div>
      <header className="bg-light px-3">
        <NavBar></NavBar>
      </header>
        <Intro></Intro>
    </div>
  );
}

export default App;
