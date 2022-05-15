import Navbar from "./components/Navbar";
import Header from "./components/Header";
import NearestRides from "./components/NearestRides/NearestRides";
import "./styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route path="nearest-rides" element={<NearestRides />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
