import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div aria-label="main-app" className="App">
        <NavBar src={logo} title="React Exercise">          
        </NavBar>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/create' element={<Create />} />
          <Route exact path='/edit/:id' element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
