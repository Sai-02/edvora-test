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
import PastRides from "./components/PastRides/PastRides";
function App() {
  const [user, setUser] = useState({});
  const [rides, setRides] = useState([]);
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/rides")
      .then((res) => res.json())
      .then((res) => setRides(res))
      .catch((e) => {
        console.log(e);
      });
    fetch("https://assessment.api.vweb.app/user")
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <Router>
      <div className="container">
        <Header user={user} />
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route
              path="nearest-rides"
              element={<NearestRides rides={rides} user={user} />}
            />
            <Route
              path="upcoming-rides"
              element={<UpcomingRides rides={rides} user={user} />}
            />
            <Route
              path="past-rides"
              element={<PastRides rides={rides} user={user} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
