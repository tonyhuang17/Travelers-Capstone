import React from 'react';
import './About.css';

const About = () => {
    return (
      <div className="about-container ">
        {/* Header Section */}
        <header className="about-header">
          <h1>Introducing Glamuor Beauty</h1>
          <p>Your journey to beauty and confidence starts here</p>
        </header>
  
        {/* Company Story */}
        <section className="company-story">
          <h2>Our Story</h2>
          <p>
          Once upon a time in the wild world of online beauty shopping…
          there lived a curious shopper named Lina.
Lina wanted the perfect foundation. One that didn’t oxidize, didn’t cake, and—please!—didn’t make her look like she was prepping for clown school. She tried product after product, read reviews until her eyes blurred, and still ended up with a drawer full of “meh.”
She wasn’t alone.
Thousands like Lina faced the same problem: endless choices, zero clarity.
That’s when we stepped in—with a bold mission:
💄 Make beauty smart.
🤖 Make recommendations personal.

 
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
  
       
  
        {/* Call to Action */}
        <section className="cta-section">
          <h2></h2>
          <p>
            Ready to discover the world of Lorem Ipsum? Our products are made for everyone, no matter your age, skin tone, or personal style. Explore our collections today and find your perfect match.
          </p>
        </section>
      </div>
    );
  };
  
export default About;