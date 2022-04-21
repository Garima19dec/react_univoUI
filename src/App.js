
import react from "react";
import './App.css';
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FirstData from "./components/FirstData";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Expertise from "./components/Expertise";
import Partnership from "./components/Parnership";
import Metrics from "./components/Metrics";
import AmazingTeam from "./components/AmazingTeam";

function App() {
  
  return (
    <>
      <Navbar />,
      <FirstData />,
      <Cards />,
      <Services />
      <AmazingTeam />
      <Expertise />
      <Partnership />
      <Metrics />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
