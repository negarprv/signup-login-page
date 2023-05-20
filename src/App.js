// import Signup from "./components/Signup";
import SideImage from "./components/SideImage";
import Login from "./components/Login";
import styles from "./App.module.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
      <SideImage />
    </div>
  );
}

export default App;
