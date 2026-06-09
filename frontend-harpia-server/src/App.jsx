import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import LiveStations from "./pages/LiveStations/LiveStations";
import FloatingNav from "./components/FloatingNav/FloatingNav";

function App() {

  const location = useLocation();

  return (
    <>
      <Header />
      {/* <FloatingNav />  Add se for necessário para todas as páginas*/}
      {location.pathname === "/" && <FloatingNav />} {/* Exibe apenas na Home */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-stations" element={<LiveStations />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;