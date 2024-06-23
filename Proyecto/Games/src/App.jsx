import './App.css'
import { Routes,Route,BrowserRouter as Router } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage.jsx';
import Register from './components/Register';
import ProtectedRoutes from "./ProtectedRoutes.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>

        <Route element={<ProtectedRoutes></ProtectedRoutes>}>
          <Route path="/profile" element={<ProfilePage></ProfilePage>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
