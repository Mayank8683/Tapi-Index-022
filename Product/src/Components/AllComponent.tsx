

// import CardComponent from "./box"
import LargeWithNewsletter from "./footer"
import Home from "./hero"
import Navbar from "./Navbar"
import GridBlurredBackdrop from "./testimonial"


export const AllComponent:any = () => {
  return (
   <>
   <div style={{overflow:"hidden"}}>
   <Navbar/>
   <Home/>
   {/* <CardComponent/> */}
   <GridBlurredBackdrop/>
   <LargeWithNewsletter/>
   </div>
   </>
  )
}

  