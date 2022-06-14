import './App.css';
import OpeningPage from "./Opening Page/OpeningPage";
import HomePage from "./HomePage/HomePage";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<OpeningPage />} />
        <Route path="/home-page" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
