import Navbar from "./components/Navbar";
import Header from "./components/Header";
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
        </div>
      </div>
    </Router>
  );
}

export default App;
