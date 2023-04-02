import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Movie />
    </div>
  );
}

export default App;
