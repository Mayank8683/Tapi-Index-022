import React, { useState } from "react";
 import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/hero.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from "./Components/box.jsx";
import GridBlurredBackdrop from "./Components/testimonial.jsx";
import LargeWithAppLinksAndSocial from "./Components/footer.jsx";
import gridListWithCTA from "./Components/carousal.jsx";
import CourseCard from "./Components/course.jsx";
import { AllComponent } from "./Components/AllComponent.jsx";
import CartPage from "./cartPage.jsx";
// import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';



const App=()=>{
  const [cart,setCart] = useState([]);
  
  const handleAddToCart = (course) =>{
    setCart((prevCart) =>[...prevCart,course]);
  };

  const handleRemoveFromCart = (courseToRemove) => {
    setCart((prevCart) => prevCart.filter((course) => course !== courseToRemove));
  };

    return(
      <>
      {/* <CartPage cart={cart} /> */}
      {/* <CourseCard setCart={setCart} /> */}
      {/* <CartPage cart={cart} setCart={setCart} /> */}
    
   <Link to='/'></Link>
    <Link to='/courses'></Link>
    <Link to = '/cartPage'>Cart🛒</Link>
    <Routes>
      <Route path="/" element={<AllComponent />} /> 
       <Route path="/courses" element={<CourseCard />} /> 
      {/* <Route path="/courses" element={<CourseCard cart={cart} handleAddToCart={handleAddToCart} />} /> */}
        <Route path="/cartPage" element={<CartPage/>} />
    </Routes>
    </>
    
  )
}
export default App;
// <Routes>
    //   <div className="App">
    //     <Navbar />
        
    //       <Route exact path="/" element={
    //         <>
    //           <Home />
    //           <CardComponent />
    //           <GridBlurredBackdrop />
    //           {/* <gridListWithCTA/> */}
    //           <LargeWithAppLinksAndSocial />
    //         </>
    //       } />
    //       <Route path="/courses/product-management" element={<CourseCard />} />
    //       <Route path="/courses" element={<CourseCard />} />
    
    //   </div>
    // </Routes>
   
   {/* <AllComponent/> */}
