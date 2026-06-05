import Header from "./pages/Header/Header.jsx";
import HarpiaServer from "./pages/HarpiaServer/HarpiaServer.jsx";
import EOP_IoT from "./pages/EOP-IoT/EOP_IoT.jsx";
import Developers from "./pages/Developers/Developers.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import LiveStations from "./pages/LiveStations/LiveStations.jsx";
import About from "./pages/About/About.jsx";

function App() {
  return (
    <>
      <Header />
      <HarpiaServer />
      <EOP_IoT/>
      <LiveStations />
      <Developers />
      <About />
      <Contact />
    </>
  );
}

export default App;