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
  const [nearestRides, setNearestRides] = useState([]);
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
  useEffect(() => {
    const arr = [];
    if (rides.length == 0 || Object.keys(user).length == 0) return;
    rides.forEach((ride) => {
      let obj = { ...ride };
      let min = Number.MAX_VALUE;
      if (ride == undefined) return;
      ride.station_path.forEach((path) => {
        min = Math.min(min, Math.abs(path - user.station_code));
      });
      obj.distance = min;
      arr.push(obj);
      arr.sort((a, b) => a.distance - b.distance);
      setNearestRides(arr);
    });
  }, [rides]);
  return (
    <Router>
      <div className="container">
        <Header user={user} />
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route
              path="nearest-rides"
              element={
                <NearestRides
                  rides={nearestRides}
                  user={user}
                />
              }
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
