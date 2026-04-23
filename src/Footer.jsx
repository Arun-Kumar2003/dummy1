// import React from "react";
// import "./assets/styles/footer.css";
// import image from "./assets/images/launch-premium.webp";

// const Footer = () => {
//   return (
//     <>
//       <div className="footer">
//         <div className="contain">
//           <div className="image-container">
//             <img src={image} alt="valakam pola image terla mame" />
//           </div>
//           <div className="connect">
//             <h2>Let's launch together</h2>
//             <p> Book a Call</p>
//           </div>
//         </div>

//         <div className="ft">
//           <p> CIBIRAJAN </p>
//           <p>2026 © Copyrights Cibirajan All rights reserved</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;




import React from "react";
import "./assets/styles/footer.css";
import image from "./assets/images/launch-premium.webp";

const Footer = () => {
  return (
    <>
      {/* CTA SECTION */}
      <section className="footer-top">
        <div className="footer-cta">

          <div className="footer-image">
            <img src={image} alt="Launch Together" />
          </div>

          <div className="footer-content">
            <h2>Let’s launch together!</h2>

            <button className="footer-btn">
              Book a Call
            </button>
          </div>

        </div>
      </section>

      {/* MAIN FOOTER */}
      <footer className="footer-bottom">

        <div className="footer-social">
          <a href="#">💐</a>
          <a href="#">in</a>
          <a href="#">𝕏</a>
          <a href="#">✉️</a>
        </div>

        <div className="footer-line"></div>

        <div className="footer-last">

          <h1>CIBIRAJAN</h1>

          <p>
            2026 © Copyrights Cibirajan All rights reserved
          </p>

        </div>

      </footer>
    </>
  );
};

export default Footer;