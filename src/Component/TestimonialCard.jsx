import "./TestimonialCard.css";

function TestimonialCard(props) {
  const offset = props.offset;

  const cardStyle = {
    transform: `translateX(${offset * 60}%) scale(${offset === 0 ? 1 : 0.85})`,
    zIndex: 10 - Math.abs(offset),
    opacity: Math.abs(offset) > 2 ? 0 : 1,
  };

  return (
    <div
      className={props.isActive ? "testimonial-card active" : "testimonial-card"}
      style={cardStyle}
    >
      <div className="testimonial-card-stars">
        {"★".repeat(props.rating)}
      </div>
      <p className="testimonial-card-quote">"{props.quote}"</p>
      <div className="testimonial-card-footer">
        <div className="testimonial-card-avatar">{props.initials}</div>
        <div className="testimonial-card-person">
          <p className="testimonial-card-name">{props.name}</p>
          <p className="testimonial-card-role">{props.role}</p>
        </div>
      </div>
    </div>
  );
}
export default TestimonialCard;