import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Story from './Components/Story';


function App() {
  return (
    <div className="container app__class">
      <Story/>
      <br/>
      <Home/>
      <Navbar/>
    </div>
  );
}

export default App;
