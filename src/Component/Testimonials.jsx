import "./Testimonials.css";
import TestimonialCard from './TestimonialCard';
import { useState } from "react";

function Testimonials() {



  const testimonials = [
    {
      name: "James Sterling",
      role: "Homeowner, London",
      initials: "JS",
      rating: 5,
      quote: "The platform made navigating PAS 2035 compliance simple. I received my assessment within a week and the coordinator was incredibly helpful.",
    },
    {
      name: "James Sterling",
      role: "Homeowner, London",
      initials: "JS",
      rating: 5,
      quote: "The platform made navigating PAS 2035 compliance simple. I received my assessment within a week and the coordinator was incredibly helpful.",
    },
    {
      name: "James Sterling",
      role: "Homeowner, London",
      initials: "JS",
      rating: 5,
      quote: "The platform made navigating PAS 2035 compliance simple. I received my assessment within a week and the coordinator was incredibly helpful.",
    },
     {
      name: "James Sterling",
      role: "Homeowner, London",
      initials: "JS",
      rating: 5,
      quote: "The platform made navigating PAS 2035 compliance simple. I received my assessment within a week and the coordinator was incredibly helpful.",
    },
     {
      name: "James Sterling",
      role: "Homeowner, London",
      initials: "JS",
      rating: 5,
      quote: "The platform made navigating PAS 2035 compliance simple. I received my assessment within a week and the coordinator was incredibly helpful.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(Math.floor(testimonials.length / 2));
  function handleNext() {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }

  function handlePrev() {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <p className="testimonials-label">Testimonial's</p>
        <h2 className="testimonials-title">
          Trusted by thousands of homeowners and <br /> local authorities.
        </h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            name={item.name}
            role={item.role}
            initials={item.initials}
            rating={item.rating}
            quote={item.quote}
            isActive={index === activeIndex}
             offset={index - activeIndex}
          />
        ))}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrev} className="testimonials-arrow">‹</button>
        <button onClick={handleNext} className="testimonials-arrow">›</button>
      </div>
    </section>
  );
}
export default Testimonials;