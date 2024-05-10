
import './App.css'
import { useEffect, useState } from "react"

export const CertificateSection = () => {
  const [isSecureContextBtn, setIsBtn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {

  })
  const handleNameInput = (e) => { setName(e.target.value) }
  const handleEmailInput = (e) => { setEmail(e.target.value) }
  const handleSeeCourse = () => {
    setIsBtn(true);
  }
  const handleLessThen = () => {
    setIsBtn(false);
  }

  return (
    <>
      <div className='CertificationPage' style={{ width: "95%", display: "flex", height: "810px", backgroundColor: "#07182c", marginLeft: "2rem" }}>
        <div className='PMCleft' style={{ width: "33%", marginTop: isSecureContextBtn ? "5rem" : "8rem", marginLeft: "4rem", backgroundColor: "#fffff", position: "absolute" }}>
          <img src="https://images.ctfassets.net/6nwv0fapso8r/7hvLG99OSXyfGhj5A2lLlF/5e44241c5afe3af6b454f7a8b2972708/PMC-shield-medium.svg" alt="logoImage" />
          <div style={{ color: "#f0f0ef" }}>
            <h1>Product Manager Certification (PMC)™</h1>
            <h5>Land your first Product Management job by building the skills you need to get hired and succeed.</h5>
          </div>

          {/*SEE COURSE CONTENT Button & it's functionality*/}

          {isSecureContextBtn ? <button onClick={handleLessThen} style={{ backgroundColor: "#07182c", color: "#01caaa", border: "none", fontSize: "1.4rem", fontWeight: "bolder" }}> &lt; </button> : <button onClick={handleSeeCourse} style={{ padding: "0.8rem", backgroundColor: "#00d3ad" }}>SEE COURSE CONTENT</button>}
          {isSecureContextBtn && (<div className="courseContentDiv" style={{ marginTop: "2rem", transition: "transform 3s ease", transform: isSecureContextBtn ? "translateX(0)" : "translateX(-10%)" }}>

            <form >

              <input type="text" value={name} onChange={handleNameInput} placeholder="First Name" style={{ padding: "14px" }} required /> &nbsp;
              <input type="text" value={email} onChange={handleEmailInput} placeholder="Email" style={{ padding: "14px" }} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter a valid email address" />

              <button type="submit" style={{ width: "100%", marginTop: "0.3rem", padding: "14px", backgroundColor: "#00d3ad" }}>GET IT NOW</button>
            </form>
            <p style={{ fontSize: "16px", color: "#f0f0ef" }}>By sharing your email, you agree to our <a href="#" style={{ color: "#01caaa" }}> Privacy Policy </a> and <a href="#" style={{ color: "#01caaa" }}>Terms of Service .</a>
            </p>
          </div>
          )}




          {/*SEE COURSE CONTENT Button & it's functionality*/}

        </div>
        <div className='PMCryt' style={{ position: "relative", marginLeft: "60%", marginTop: isSecureContextBtn ? "5rem" : "4rem" }}>
          <img style={{ borderEndStartRadius: "35%", borderEndEndRadius: "35%", width: "105%", height: "98%" }} src="https://img.freepik.com/free-photo/african-business-lady-standing-grey-background_171337-16083.jpg?size=626&ext=jpg&ga=GA1.1.537974997.1715247395&semt=ais" alt="PMCrytImg" />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, width: "105%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="PMCrytClip" style={{ color: "#f0f0ef", backgroundImage: "linear-gradient(to bottom, rgb(177,212,255 , 0.2),rgb(16,56,105,0.7),rgb(16,56,105,1))", position: "absolute", top: 0, left: 0, width: "100%", height: "98%", borderEndStartRadius: "35%", borderEndEndRadius: "35%" }}>
              <div style={{ width: "170px", backgroundColor: "#b9eff5", padding: "10px", borderRadius: "20px", fontSize: "18px", textAlign: "center", margin: "40px", color: "#2d4657" }}>Product School Alum</div>
              <p style={{ margin: "16rem 1rem 0 1rem", textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad voluptatem laboriosam ipsum, nostrum voluptas harum eligendi ab natus fugit aspernatur iure illo quis quasi eaque voluptate quas? Quaerat, obcaecati?</p>
              <div style={{ lineHeight: "0px", textAlign: "center" }}>
                <h3>Shilpi Verma</h3>
                <p>Product Lead</p>
              </div>
              <div>
                <h1 style={{ textAlign: "center", marginTop: "10%" }}>Google</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Video div start-------------------------------------------------------------------------------------------------------- */}
      <div className="PMCvideoDiv" style={{ width: "95%", display: "flex", height: "600px", marginLeft: "2rem" }}>
        <div className="PMCvideoDivLeft" style={{ marginTop: "5rem" }}>

          <iframe style={{ borderRadius: "1.5%", }} width="690" height="400" src="https://www.youtube.com/embed/iKUiRp7thJI?si=yJGQWEBzOaPDMngD&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

          </iframe>
        </div>
        <div className="PMCvideoDivRyt" style={{ width: "40%", margin: "10% 0 0 10%", lineHeight: "2rem", textAlign: "justify", fontSize: "24px" }}>
          <h1>Land your dream Product Management job!</h1>
          <p>Launch Your Product Management Career and secure your first Product Management job and excel in your role by acquiring essential skills with our Product Manager Certification (PMC)™.</p>

        </div>
      </div>
      {/*Video div end-------------------------------------------------------------------------------------------------------- */}


      {/*enrollNow div start-------------------------------------------------------------------------------------------------------- */}
      <div className="enrollNowDiv">
        <div className="enrollNowDivHead" style={{ textAlign: "center", height: "13rem" }}>
          <h1>We help you get your first Product <br /> Management job and hit the <br /> ground running. Here’s how:</h1>
        </div>
        <div className="enrollNowDivMain" style={{ display: "flex", gap: "4rem", marginLeft: "2rem", alignItems: "justify", justifyContent: "center" }}>
          {/* div----------------1 */}
          <div className='enrollNowDivMainImg1' style={{ width: "26%" }}>
            <img src="https://images.ctfassets.net/6nwv0fapso8r/1mpjvtIsjXyCqzNwR9NXKg/011488f9cdb20a60836f66f72010f0e0/PMC_Recognized-Instructors_2x.svg" alt="" />
            <h3>Top Silicon Valley instructors</h3>
            <p>You’ll learn directly from proven Product Leaders from top Silicon Valley tech companies like Google, Meta, and Amazon leveraging their real world experiences, frameworks, and approaches to help you excel. </p>
          </div>
          {/* div------------2 */}
          <div className='enrollNowDivMainImg2' style={{ width: "26%" }}>
            <img src="https://images.ctfassets.net/6nwv0fapso8r/49GabAwrugleGjxPTU4FHw/a4f28bcc5cf874f44c3583d1a0232cfd/PMC_One-to-one_2x.svg" alt="" />
            <h3>More instructor time tailored to you</h3>
            <p>Our live online classes are strictly limited to a small number of students per class. Whereas programs at other institutions can have 400+ learners, our courses guarantee personalized attention from instructors and tailored feedback to help you master the art of product.</p>
          </div>
          {/* div-----3 */}
          <div className='enrollNowDivMainImg3' style={{ width: "26%" }}>
            <img src="https://images.ctfassets.net/6nwv0fapso8r/i05ZiXpZA1OPfUsZlFmn2/3867c6e765d38fb0dfa33d62316af5fa/PMC_Industry-wide_credibility_2x.svg" alt="" />
            <h3>Industry-wide recognition from hiring managers</h3>
            <p>We’ve helped thousands of aspiring PM land jobs at companies like Google and Microsoft. That’s why hiring managers from all industries recognize and value applicants with Product School certifications.</p>
          </div>
        </div>
        <button className='enrollBtn' style={{ padding: "0.7rem", borderRadius: "0.2rem", marginLeft: "45%", marginTop: "3rem" }}>ENROLL NOW</button>
      </div>
      {/*enrollNow div end----------------------------------------------------------------------------------------------------------*/}

      <div className="metaDiv" style={{display:"flex",width:"95%" , marginLeft:"2rem",marginTop:"4rem",gap:"8%",padding:"0%"}} >
  <div className="metaRytCornerImg" >
    <img style={{width:"100%", height:"100%",borderStartEndRadius:"60%",border:"1px solid black"}} src="https://productschool.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6nwv0fapso8r%2F5PbeUh7H2VDxVPfXmvLqI3%2Fb337c94d65552574544b69b8e01e3022%2FMedha.jpg&w=1920&q=75" alt="" />
  </div>
  <div className="metaRytCornerText" style={{width:"30%" ,fontSize:"22px"}}>
   <div style={{marginTop:"8rem"}}> <img src="https://productschool.com/_next/static/media/quote__accent_1.e15c3eef.svg" alt="" /></div>
    <div style={{marginTop:"25%"}}>
      <h4>This certification covers everything you need to know about Product Management to jumpstart and land your first PM job. It isn’t all theory, you get to apply everything you learn to your own project and the instructors provide feedback to help you improve.</h4>
    </div>
    <div style={{lineHeight:"1px",marginTop:"15%"}}>
      <h5>Medha Ghatikesh</h5>
      <p>Product Manager</p>
    </div>
   <div style={{marginTop:"15%"}}>
   <img src="https://images.ctfassets.net/6nwv0fapso8r/4stAWpNWcovbviGeiPxkt0/5d59e4914a95ca3c3dec9282d2493b5f/Meta.svg" alt="" />
   </div>
  </div>
</div>

{/*--------------------------------------------------------------------------------------------------------------------------------------*/}

<div className='PMCcurriculum' style={{width:"95%",height:"810px",backgroundColor:"#07182c",marginLeft:"2rem" , position:"absolute"}}>
  <div style={{color:"antiquewhite",margin:"3rem",lineHeight:"1.5px"}}>
    <h2>Product Manager Certification (PMC)™ curriculum </h2>
Here’s what’s covered:
</div>
<div className="PMCcurriculumLeft" >
<Accordion allowToggle>
  <AccordionItem backgroundColor='#0f243e' >
    
      <AccordionButton className='AccordionButton'>
        <Box  as='span' flex='2' textAlign='left' >
          1. How great PMs are built and how they build great products
        </Box>
        <AccordionIcon />
      </AccordionButton>
    
    <AccordionPanel pb={4} className='AccordionButtonPannel'>
    
The first step in building amazing products is to gain deeper insight into the role of a Product Manager. Learn how digital products are built, what is expected of you as a PM, and how to excel in this rewarding (and well-compensated!) career.
    </AccordionPanel>
    
  </AccordionItem>

  <AccordionItem>
    
      <AccordionButton className='AccordionButton'>
        <Box as='span' flex='1' textAlign='left'>
          2. Understanding who your customers are and how they think
        </Box>
        <AccordionIcon />
      </AccordionButton>
    
    <AccordionPanel pb={4} className='AccordionButtonPannel'>
   
Great PMs know how to get into the heads of their customers, to deeply understand their pain points and needs, and create loved and impactful product experiences. Learn how to create personas, use cases, and customer journeys that can be used to deliver user impact. Get hands-on experience navigating Product–Market Fit and leverage research with pro tools like Sprig and AB Tasty.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</div>
</div>

    </>
  )
}


