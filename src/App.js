import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Career from './Career';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/capital' element={<Home />} />
          <Route path='/capital/about' element={<About />} />
          <Route path='/capital/career' element={<Career />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
