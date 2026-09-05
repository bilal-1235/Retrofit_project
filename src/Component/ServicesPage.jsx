import "./Services.css";
import ServiceCard from "../Component/ServicesCard";
import serviceimage1 from "../assets/Service/Service-image1.png";
import serviceimage2 from "../assets/Service/Service-image2.png";
import serviceimage3 from "../assets/Service/Service-image3.png";
function ServicesPage() {
  const services = [
    {
      title: "Retrofit Whole-House Assessment",
      description:
        "Comprehensive technical survey and digital energy model according",
      category: "Assessment",
      budget: "Under £500",
      tag: "PAS 2035",
      duration: "5-7 Days",
      price: "£450",
      image: serviceimage1,
    },
    {
      title: "Retrofit Whole-House Assessment",
      description:
        "Comprehensive technical survey and digital energy model according",
      category: "Design",
      budget: "Under £500",
      tag: "PAS 2035",
      duration: "5-7 Days",
      price: "£450",
      image: serviceimage2,
    },
    {
      title: "Retrofit Whole-House Assessment",
      description:
        "Comprehensive technical survey and digital energy model according",
      category: "Design",
      budget: "Under £500",
      tag: "PAS 2035",
      duration: "5-7 Days",
      price: "£450",
      image: serviceimage3,
    },
    
  ];

  return (
    <section>
      <p className="Services" color="green"> All Services</p>
      <h2 className="Retrofit-Services">Retrofit Services</h2>
      <p className="Services-description">Browse premium services designed to inspire and elevate your projects.</p>
      <div className="services-grid">
        {services.map((item) => (
          <ServiceCard
            key={item.title}
            title={item.title}
            tag={item.tag}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
export default ServicesPage;
