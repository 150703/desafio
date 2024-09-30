import { useState } from 'react'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      
  
    <div className="App">
      
      <header className="header">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
          <button className="contact-button">CONTACT</button>
        </nav>
        <h1>We Are Creatives</h1>
        <div className="orange-image">
        <div className="footer-logo">
    <img src="images/icon-arrow-down.svg" alt="sunnyside logo" />
  </div>
          <img src="images/desktop/image-header.jpg" alt="" />
        </div>
      </header>

      {/* Section 1 */}
      <section className="section section-1">
        <div className="left-block">
          <h2>Transform your brand</h2>
          <p>We are a full-service creative agency specializing in helping brands grow fast...</p>
          <a href="#learnmore" className="learn-more-button">LEARN MORE</a>
        </div>
        <div className="right-block">
          <img src="images/desktop/image-stand-out.jpg" alt="eggs" />
          
        </div>
      </section>

      {/* Section 2 */}
      <section className="section section-1">
        <div className="right-block">
          <img src="images/desktop/image-transform.jpg" alt="cup" />
  
        </div>
        <div className="right-block">
          <h2>Stand out to the right audience</h2>
          <p>Using a collaborative formula of designers, photographers, videographers...</p>
          <a href="#learnmore" className="learn-more-button">LEARN MORE</a>
        </div>
        
      </section>

      {/* Services */}
      <section className="section section-1">
        <div className="right-block">
          <img src="images/desktop/image-graphic-design.jpg" alt="" />
        </div>
        <div className="right-block">
        <img src="images/desktop/image-photography.jpg" alt="" />
        </div>
        
      </section>



      {/* Testimonials */}
      <section className="testimonials">
  <h2>Client Testimonials</h2>
  <div className="testimonial-container">
    <div className="testimonial">
      <img src="images/image-emily.jpg" alt="Emily R." />
      <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
      <h3>Emily R.</h3>
      <span>Marketing Director</span>
    </div>
    <div class="testimonial">
      <img src="images/image-thomas.jpg" alt="Thomas S." />
      <p>Sunnyside's enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
      <h3>Thomas S.</h3>
      <span>Chief Operating Officer</span>
    </div>
    <div class="testimonial">
      <img src="images/image-jennie.jpg" alt="Jennie F." />
      <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
      <h3>Jennie F.</h3>
      <span>Business Owner</span>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="footer">
  <div className="footer-logo">
    <img src="images/logo.svg" alt="sunnyside logo" />
  </div>
  <div className="footer-menu">
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Projects</a>
  </div>
  <div className="footer-social">
    <p>
    <a href="#"><img src="images/icon-facebook.svg" alt="Facebook" /></a>
    <a href="#"><img src="images/icon-instagram.svg" alt="Instagram" /></a>
    <a href="#"><img src="images/icon-twitter.svg" alt="Twitter" /></a>
    <a href="#"><img src="images/icon-pinterest.svg" alt="Pinterest" /></a>
    </p>
  </div>
</footer>





    </div>
  

      </div>
      
    </>
  );
}

export default App
