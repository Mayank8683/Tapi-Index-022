// 1. import `ChakraProvider` component

// import DataComponent from "./Pages/components/FetchData"


import Footer2 from "./Pages/Footer2.tsx";
import Instructor from "./Pages/Instructor.tsx";
// import Navbar from "./Pages/components/Navbar.tsx";



// function App() {
  
// import "./App.css";
// import { RoutingCertificate } from "./routesCertificate/routingCertificate";

// const App = () => {
//   return (
//     <div>
//       <RoutingCertificate />
//     </div>
//   );
// };

// export default App;
// App.jsx
import "./App.css";
import { EnrollmentProvider } from "./context/EnrollmentProvider";
import { RoutingCertificate } from "./routesCertificate/routingCertificate";


const App = () => {
  return (
    <>
   {/* <Navbar/> */}
    <Instructor/>
     <Footer2/>
   
  

    <EnrollmentProvider>
      <div>
        <RoutingCertificate/>
      </div>
    </EnrollmentProvider>
    </>
  );
};

export default App;

