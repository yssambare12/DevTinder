import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div>base page</div>}></Route>
          <Route path="/login" element={<div>login page</div>}></Route>
          <Route path="/admin" element={<div>admin page</div>}></Route>
        </Routes>
      </BrowserRouter>
      <Navbar />
      <h1 className="p-4 m-4 bg-blend-darken text-3xl font-bold underline">
        Vite + React
      </h1>
    </>
  );
}

export default App;
