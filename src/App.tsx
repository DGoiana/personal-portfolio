import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/work" element={<WorkPage />}></Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
