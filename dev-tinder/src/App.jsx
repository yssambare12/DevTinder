import Body from "./Body.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <h1 className="p-4 m-4 bg-blend-darken text-3xl font-bold underline">
        Vite + React
      </h1>
    </>
  );
}

export default App;
