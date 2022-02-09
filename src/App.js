import React from "react";
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
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
