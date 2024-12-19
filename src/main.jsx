import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import Authlayout from "./layout/Authlayout.jsx";
import Fullwidthlayout from "./layout/Fullwidthlayout.jsx";
import firebaseConfig from "./firebase.auth.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Fullwidthlayout />}>
        <Route
          index
          element={<App />}
        />
        <Route
          path="dashboard"
          element={<Dashboard />}
        />
      </Route>

      <Route element={<Authlayout />}>
        <Route
          path="login"
          element={<Login />}
        />
        <Route
          path="register"
          element={<Register />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
