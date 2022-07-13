import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieDetailContainer from './containers/MovieDetailContainer/MovieDetailContainer'
import Navbar from "./containers/Navbar/Navbar";
import Home from "./Views/Home/Home";
import Login from "./Views/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<MovieDetailContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
