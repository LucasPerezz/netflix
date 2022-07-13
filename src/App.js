import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import MovieDetailContainer from './containers/MovieDetailContainer/MovieDetailContainer'
import Home from "./Views/Home/Home";
import Login from "./Views/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<MovieDetailContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
