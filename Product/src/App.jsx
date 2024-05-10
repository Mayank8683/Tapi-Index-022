import React from "react";
import Navbar from "./Components/Navbar.jsx";
import { CertificateSection } from "./CertificateSection/CertificateSection.jsx";


const App=()=>{
  return(
    <div className="App">
      <Navbar/>
      <CertificateSection/>
    </div>
  )
}
export default App;
