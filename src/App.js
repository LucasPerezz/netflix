import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieDetailContainer from './containers/MovieDetailContainer/MovieDetailContainer'
import Navbar from "./containers/Navbar/Navbar";
import Home from "./Views/Home/Home";
import { genresContext } from "./context/useContextPro";
import MovieListContainer from "./containers/MovieListContainer/MovieListContainer";

function App() {
  return (
    <>
      <genresContext.Provider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<MovieDetailContainer />} />
          <Route path="/:media_type" element={<MovieListContainer />} />
        </Routes>
      </Router>
      </genresContext.Provider>
    </>
  );
}

export default App;
