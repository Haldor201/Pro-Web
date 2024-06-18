import './App.css'
import { Routes,Route,BrowserRouter as Router } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
