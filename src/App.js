import React from 'react';
import './App.css'; // Import CSS styles
import Carousel from "./Carousel"; // Import the Carousel component

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">Creative Spark</h1>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#services">What We Do</a></li>
            <li><a href="#social">Social Media Masters</a></li>
            <li><a href="#about">What Use</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="home">
        <div className="carousel-container">
          <Carousel /> {/* Add the carousel component here */}
        </div>
        <div className="overlay-content">
          <h2>Empowering Your Digital Presence</h2>
          <p>Streamlining and Nighttime Service</p>
          <button>Know More</button>
        </div>
      </section>


      <section id="portfolio" className="portfolio">
        <h2>Portfolio</h2>
        <div className="image-grid">
          <a href="#page1"><img src={require('./assets/logo-1.webp')} alt="log design 1" /><span>Logo Designing</span></a>
          <a href="#page1"><img src={require('./assets/leaflets.webp')} alt="j 2" /><span>Leaflet Designing</span></a>
          <a href="#page2"><img src={require('./assets/brochure.webp')} alt="Portfolio 3" /><span>Web Brochure Designing</span></a>
          <a href="#page3"><img src={require('./assets/web.webp')} alt="Portfolio 4" /><span>Website Designing</span></a>
          <a href="#page4"><img src={require('./assets/woo-com.webp')} alt="Portfolio 5" /><span>Woo-Commerce Website Designing</span></a>
          <a href="#page5"><img src={require('./assets/graphic.webp')} alt="Portfolio 6" /><span>Graphic Designing</span></a>
          <a href="#page6"><img src={require('./assets/social.webp')} alt="Portfolio 7" /><span>Social Media Post Designing</span></a>
          <a href="#page1"><img src={require('./assets/handle.webp')} alt="Portfolio 8" /><span>Social Media Handling</span></a>
          <a href="#page1"><img src={require('./assets/content.webp')} alt="Portfolio 9" /><span>Content Write-up</span></a>
          <a href="#page1"><img src={require('./assets/portfolio.webp')} alt="Portfolio 10" /><span>Business Portfolio Designing</span></a>
        </div>
      </section>

      <section id="services" className="services">
        <h2>What We Do</h2>
        <p>
          At Creative Spark we specialize in bringing creativity and innovation to your brand with a wide range of services, including unique logo designing to define your identity, eye-catching leaflet and web brochure designs for impactful communication, and sleek website and WooCommerce solutions to enhance your online presence. Our expertise extends to graphic designing for visually compelling creations, engaging social media post designs, and effective social media handling to grow your audience. We also provide persuasive content write-ups and professional business portfolio designs to showcase your achievements. Let us help you make a lasting impression with designs that stand out!
        </p>
        <div className="services-images">
          <img src={require('./assets/girl-1.webp')} alt="Service 1" />
          <img src={require('./assets/handle.webp')} alt="Service 2" />
          <img src={require('./assets/social.webp')} alt="Service 3" />
          <img src={require('./assets/woo-com.webp')} alt="Service 4" />
        </div>
      </section>

      <section id="social" className="social">
        <h2>Social Media Masters</h2>
        <h2><u>Elevate Your Online Identity</u></h2>
        <p>In today’s digital age, having a strong social media presence is essential for building brand identity and fostering connections with your audience. At Creative Spark, we specialize in crafting personalized strategies tailored to your brand's unique voice. From creating eye-catching posts to managing consistent and engaging content, we ensure your platforms stand out and resonate with your target audience. Let us transform your online presence into a dynamic extension of your brand.</p>
        <div style={{ height: "20px" }}></div> 
        <div className="social-images">
          <img src={require('./assets/social.webp')} alt="social 1" />
        </div>

        <h2><u>Drive Engagement and Growth</u></h2>
        <p>Our team of social media experts employs cutting-edge tools and innovative techniques to boost engagement, attract followers, and drive meaningful interactions. Whether it’s running data-driven campaigns, designing stunning visuals, or crafting compelling copy, we focus on generating measurable results. With our expertise in analytics and audience targeting, we help you grow your reach and build a loyal community of followers who are genuinely interested in what you have to offer.</p>
        <div style={{ height: "20px" }}></div> 
        <div className="social-images">
          <img src={require('./assets/handle.webp')} alt="social 1" />
        </div>

        <h2><u>Delivering Results That Matter</u></h2>
        <p>At Creative Spark, we believe in more than just metrics; we believe in impact. Our goal is to deliver campaigns that not only increase likes and shares but also drive conversions and business growth. Whether you’re looking to increase brand awareness, promote a product, or enhance customer relationships, we deliver strategies that align with your goals and produce tangible outcomes. Partner with us and experience social media management that turns engagement into success.</p>
        <div style={{ height: "20px" }}></div> 
        <div className="social-images">
          <img src={require('./assets/girl-1.webp')} alt="social 1" />
        </div>
      </section>

      <section id="about" className="about">
        <h2>What Use</h2>
        <p>At Creative Spark, we harness the power of cutting-edge tools and technology to elevate your digital presence. From advanced design software like Adobe Creative Suite to industry-standard development frameworks, we ensure that every solution we provide is crafted with precision and innovation. Our team utilizes analytics platforms to understand market trends and user behavior, enabling us to create strategies that resonate with your target audience. Whether it's building responsive websites, optimizing SEO for better search engine rankings, or designing visually captivating graphics, our approach combines creativity with technical expertise to deliver outstanding results.</p>
        <p>We also focus on leveraging automation tools and collaborative platforms to streamline workflows and enhance productivity. From project management software to social media scheduling tools, we ensure that every aspect of your digital marketing strategy is executed seamlessly. Additionally, we prioritize staying updated with the latest advancements in technology, ensuring that your brand stays ahead of the competition. By integrating artificial intelligence, data-driven insights, and dynamic content creation tools into our workflow, we aim to create experiences that not only captivate but also convert. At Creative Spark, we believe that using the right tools is the first step to delivering exceptional value to our clients.</p>
      </section>

      {/* <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section> */}
      <footer className="footer">
  <div className="footer-content">
    <div className="footer-left">
    <div className="footer-about-container">
      <p className="footer-about">
        “At Creative Spark, we ignite ideas and transform them into powerful digital experiences with outstanding and creative ways of approaches. Let us bring your brand to life!”
      </p>
      </div>
    </div>
    <div className="footer-center">
      <center><h3>Contact Us</h3></center>
      <p>
        <strong>Address:</strong> 123 Creative Lane, Spark City, SC 12345
      </p>
      <p>
        <strong>Phone:</strong> +1 (123) 456-7890
      </p>
      <p>
        <strong>Email:</strong> info@creativespark.com
      </p>
    </div>
    <div className="footer-right">
      <h3>Follow Us On</h3>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  </div>
  <p>&copy; 2024 Creative Spark. All rights reserved.</p>
</footer>

    </div>
  );
}

export default App;
