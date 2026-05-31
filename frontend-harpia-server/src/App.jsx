import Header from "./pages/Header/Header.jsx";
import HarpiaServer from "./pages/HarpiaServer/HarpiaServer.jsx";
import Developers from "./pages/Developers/Developers.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import LiveStations from "./pages/LiveStations/LiveStations.tsx";
import About from "./pages/About/About.tsx";

function App() {
  return (
    <>
      <Header />
      <HarpiaServer />
      <About />
      <LiveStations />
      <Developers />
      <Contact />
    </>
  );
}

export default App;