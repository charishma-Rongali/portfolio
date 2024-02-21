
import React from "react";
import Navbars from "./components/Navbars";
import Home from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";


function App() {
  return (
    <div style={{ backgroundColor: '#FFC0CB ' }}>
     <Navbars/>
     <Home/>
     <Projects/>
     <Certificates />
     <Contact />
   </div>
  );
}
//skills
//contact
export default App;