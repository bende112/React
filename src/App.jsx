import About from "./Pages/About";
import Home from "./Pages/Home";
import UserPage from "./Pages/UserPage";
import SearchPage from "./Pages/SearchPage";
import { Routes, Route, Link } from "react-router-dom"

export default function App() {
  return (
    <div>
      <h1>Dynamic Routing</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/users/:username" element={<UserPage />}>
          <Route path="posts" element={<p>Post part</p>} />
          <Route path="likes" element={<p>Likes part</p>} />
        </Route>
        <Route path="/footballPlayers" element={<SearchPage />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </div>
  );
}
