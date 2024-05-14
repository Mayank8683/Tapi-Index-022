// 1. import `ChakraProvider` component

// import DataComponent from "./Pages/components/FetchData"


import Footer2 from "./Pages/Footer2.tsx";
import Instructor from "./Pages/Instructor.tsx";
// import Navbar from "./Pages/components/Navbar.tsx";



// function App() {
  
// import "./App.css";
// import { RoutingCertificate } from "./routesCertificate/routingCertificate";

import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { EnrollmentProvider } from "./context/EnrollmentProvider";
import { RoutingCertificate } from "./routesCertificate/routingCertificate";
import { AllComponent } from "./Components/AllComponent";
import CourseCard from "./Components/course";
import CartPage from "./cartPage";
import { ChakraProvider } from "@chakra-ui/react";
// import React, { useState } from "react";
//  import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
// import Navbar from "./Components/navbar.jsx";
// import Home from "./Components/hero.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import CardComponent from "./Components/box.jsx";
// import GridBlurredBackdrop from "./Components/testimonial.jsx";
// import LargeWithAppLinksAndSocial from "./Components/footer.jsx";
// import gridListWithCTA from "./Components/carousal.jsx";
// import CourseCard from "./Components/course.jsx";
// import { AllComponent } from "./Components/AllComponent.jsx";
// import CartPage from "./cartPage.jsx";


const App = () => {
  return (
    <>
   {/* <Navbar/> */}
    {/* <Instructor/>
     <Footer2/> */}
   
  
    //Amrit routes
    {/* <> */}

 <ChakraProvider>  
 <Link to='/'></Link>
  <Link to='/courses'></Link>
  <Link to = '/cartPage'>Cart🛒</Link>
  <Routes>
    <Route path="/" element={<AllComponent/>} /> 
     <Route path="/courses" element={<CourseCard/>} /> 
    {/* <Route path="/courses" element={<CourseCard cart={cart} handleAddToCart={handleAddToCart} />} /> */}
      <Route path="/cartPage" element={<CartPage/>} />
      <Route path="/instructor" element={<Instructor/>} /> 
  </Routes>
  </ChakraProvider>


    <EnrollmentProvider>
        <RoutingCertificate/>
    </EnrollmentProvider>

    </>
  );
};

export default App;

