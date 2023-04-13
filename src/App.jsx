import "./assets/scss/root.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import Feedback from "./pages/Feedback";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/jobs" element={<Jobs />}></Route>
        <Route exact path="/feedback" element={<Feedback />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
