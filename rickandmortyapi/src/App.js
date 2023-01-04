import "./App.css";
import { Route, Routes } from "react-router";
import Character from "./pages/Character";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
