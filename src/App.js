import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Direction } from './components/Direction';
import { Directions } from './components/Directions';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Direction/>
      < Directions/>
      <Contact/>
      
    </div>
  );
}

export default App;
