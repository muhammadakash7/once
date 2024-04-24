import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SavedRecipe from './pages/saved-recipe';
import CraeteRecipe from './pages/craete-recipe';
import Home from './pages/home';
import Auth from './pages/auth';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/create-recipe' element={<CraeteRecipe/>} />
          <Route path='/saved-recipe' element={<SavedRecipe/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
