
import React from "react";
import Navbars from "./components/Navbars";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import About from "./components/About";


function App() {
  return (
    <div style={{ backgroundColor: '#FFC0CB ' }}>
     <Navbars/>
     <hr></hr>
     <About/>
     <hr></hr>
     <Projects/>
     <hr></hr>
     <Certificates />
     <hr></hr>
     <Contact />
   </div>
  );
}
//skills
//contact
export default App;