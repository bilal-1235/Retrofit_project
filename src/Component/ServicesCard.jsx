import './ServicesCard.css'

function ServiceCard(props) {
  return (
    <div className="service-card">
      <img className="service-card-image" src={props.image} alt={props.title} />
      <div className="service-card-info">
        <h3 className="service-card-title">{props.title}</h3>
        <span className="service-card-tag">{props.tag}</span>
        <span className="service-card-price">${props.price}</span>
      </div>
      <p className="service-card-description">{props.description}</p>
      <button className="service-card-button">View Details</button>
    </div>
  );
}
export default ServiceCard;