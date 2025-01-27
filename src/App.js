import Navigation from "./components/Navigation";
import Home from "./components/Home/Home";
import Summary from "./components/summary/Summary";
import Language from "./components/language/Language";

import Processes from "./components/process/Processes";
import Porject from "./components/porjects/Porject";
import Carrer from "./components/career/Carrer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Progress from "./components/progress/Progress";
import Theme from "./components/theme/Theme";
import SideNav from "./components/sidenavbar/SideNav";




function App() {
  return (
   <>
   {/* <SideNav /> */}
   <Theme />
  <Progress />

   <div className="container">
   
    <Navigation />
    <Home />
    <Summary />
    <Language />
    {/* <Processes /> */}
    <Porject />
    <Carrer />
    <About />
    <Contact />
    <Footer />
   </div>
   
   </>
  );
}

export default App;
