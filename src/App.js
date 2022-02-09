import React, { useEffect } from "react";
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn";
import PrivateRoute from "./Components/PrivateRoute";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 100,
      duration: 900,
      easing: "ease",
    });
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
