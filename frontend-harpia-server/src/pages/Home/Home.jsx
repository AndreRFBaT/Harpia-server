// pages/Home/Home.jsx

import HarpiaServer from "../HarpiaServer/HarpiaServer";
import EOP_IoT from "../EOP-IoT/EOP_IoT";
import About from "../About/About";
import Developers from "../Developers/Developers";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <>
      <HarpiaServer />
      <EOP_IoT />
      <Developers />
      <About />
      <Contact />
    </>
  );
}

export default Home;