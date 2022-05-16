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
import UpcomingRides from "./components/UpcomingRides/UpcomingRides";
import { useEffect, useState } from "react";
function App() {
  const [rides, setRides] = useState([]);
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/rides")
      .then((res) => res.json())
      .then((res) => setRides(res))
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route path="nearest-rides" element={<NearestRides />} />
            <Route
              path="upcoming-rides"
              element={<UpcomingRides rides={rides} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
