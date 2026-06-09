import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import LiveStations from "./pages/LiveStations/LiveStations";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-stations" element={<LiveStations />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;