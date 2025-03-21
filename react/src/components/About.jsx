import React from 'react';
import './About.css';

const About = () => {
    return (
      <div className="about-container imageBackGround">
        {/* Header Section */}
        <header className="about-header">
          <h1>Introducing Lorem Ipsum</h1>
          <p>Your journey to beauty and confidence starts here</p>
        </header>
  
        {/* Company Story */}
        <section className="company-story">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            convallis turpis. Nunc fringilla ipsum eu mi lacinia, sed cursus urna
            tincidunt. Fusce sit amet egestas purus. Vivamus suscipit gravida odio
            in maximus. Aliquam erat volutpat. Nulla viverra ante orci, eu congue
            ligula pellentesque eget. 
          </p>
          <p>
            Sed auctor erat sit amet felis congue, ac vestibulum dui iaculis.
            Aliquam eu sapien nec dui lacinia tristique. Nunc posuere nisl ac purus
            convallis suscipit. In nec maximus turpis.
          </p>
        </section>
  
        {/* Our Values */}
        <section className="our-values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Quality:</strong> We strive for the highest quality in every product we make.</li>
            <li><strong>Innovation:</strong> We are always pushing the boundaries of beauty and technology.</li>
            <li><strong>Diversity:</strong> We embrace the beauty in all of us, celebrating every shade and type.</li>
            <li><strong>Empowerment:</strong> Our mission is to make you feel confident and beautiful, inside and out.</li>
          </ul>
        </section>
  
        {/* Mission Statement */}
        <section className="mission-statement">
          <h2>Our Mission</h2>
          <p>
            At Lorem Ipsum, we believe that makeup is more than just a way to enhance your beauty – it’s a way to express yourself, feel confident, and celebrate your individuality. Our mission is to create high-performance products that help you look and feel your best, every day.
          </p>
        </section>
  
        {/* Call to Action */}
        <section className="cta-section">
          <h2>Join the Lorem Ipsum Family</h2>
          <p>
            Ready to discover the world of Lorem Ipsum? Our products are made for everyone, no matter your age, skin tone, or personal style. Explore our collections today and find your perfect match.
          </p>
        </section>
      </div>
    );
  };
  
export default About;