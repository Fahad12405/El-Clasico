import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-6 offset-lg-3">
              
            <div className="contact-content text-center">
              <Link to="/" className="logo-link">
                
               <h1 className="logo-heading">El Clasico</h1>
               </Link> 
                <p>
                  Welcome to El Clasico, your premier destination for top-quality football accessories. Whether you're a fan or a player, we've got you covered with our wide range of football balls, t-shirts, and shoes. Elevate your game with El Clasico today!
                </p>
                <div className="hr" />
                <h6>Visit us at:</h6>
                <h6>
                Sector 11 1/2 , Karachi, Sindh, Pakistan
                </h6>
                <h6>
                  Contact us at: +92 3272748498 | +92 3241026582
                </h6>
                
         

                <div className="contact-social">
                  <ul>
                    <li>
                      <a className="hover-target" href="https://www.facebook.com/profile.php?id=61554196937436">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="https://www.linkedin.com/in/fahad-alam-3b683a2a2/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="https://github.com/Fahad12405/">
                        <i className="fab fa-github" />
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="https://www.instagram.com/fahadalam12405/">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="https://zenith-e-folio.vercel.app/">
                      <i class="fa-solid fa-link"></i></a>
                      
                    </li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <footer>
        
        <p>
          Stay connected with El Clasico. Follow us on social media for the latest updates!
        </p>
        <p>
          Copyright © 2024{" "}
          <Link to="/">
            <img src="https://www.marks-iplaw.jp/wp-content/uploads/2020/12/El-Clasico.jpg" alt="El Clasico Logo" />
          </Link>{" "}
          All Rights Reserved.
        </p>
        
      </footer>
    </>
  );
};

export default Footer;
