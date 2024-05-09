import React from "react";
import "./footer.css";

const Footer = ()=>{
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employeer</p>
                        </a>
                        <a href="Health Plan">
                            <p>Health Plan</p>
                        </a>
                        <a href="Individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb__fotter-links_div">
                        <h4>Resources</h4>
                        <a href="/employer">
                            <p>Employeer</p>
                        </a>
                        <a href="Health Plan">
                            <p>Health Plan</p>
                        </a>
                        <a href="Individual">
                            <p>Individual</p>
                        </a>

                    </div>
                    <div className="sb__footer-links_div">
                        <h4>partners</h4>
                        <a href="/employer">
                            <p>Employeer</p>
                        </a>
                        <a href="Health Plan">
                            <p>Health Plan</p>
                        </a>
                        <a href="Individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>commng soon on </h4>
                        <div className="socialmedia">
                            {/* 7social media icons */}
                        </div>
                    </div>
                </div>

                <hr />
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>@{new Date().getFullYear()} codeinn. All right reserved.</p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms & conditions</p></div></a>
                        <a href="/terms"><div><p>Terms & conditions</p></div></a>
                        <a href="/terms"><div><p>Terms & conditions</p></div></a>
                         <a href="/terms"><div><p>Terms & conditions</p></div></a>
                    </div>
                </div>


            </div>
            <div className="box2">


            </div>
            <div className="box3">

            </div>
            <div className="box4">
                 <div> c 2024, Product School Inc.</div>
                 <div>
                    <p>Code of Conduct</p>
                 <p>Privacy Policy</p>
                 <p>Terms of Service</p></div>
            </div>
            <div className="box5">
                <div><p>Regualatory information</p></div>
                <div>
                    <p>Catalog</p>
                    <p>School Performance Fact Sheets</p>
                    <p>Bureau for Private Postsecondary Education Annual Report</p>
                    <p>Bureau for Private Postsecondary Education</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;