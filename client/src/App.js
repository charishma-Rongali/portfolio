
import React from "react";
import Navbars from "./components/Navbars";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import About from "./components/About";


function App() {
  return (
    <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.98)' }}>
     <Navbars/>
     <hr></hr>
     <About/>
     <Projects/>
     <Certificates />
     <Contact />
   </div>
  );
}
//skills
//contact
export default App;