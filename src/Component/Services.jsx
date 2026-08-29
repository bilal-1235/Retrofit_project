  import "./Services.css";
  import serviceimage1 from '../assets/Service/Service-image1.png'
  import serviceimage2 from '../assets/Service/Service-image2.png'
  import serviceimage3 from '../assets/Service/Service-image3.png'
  import ServiceCard from '../Component/ServicesCard'

  function Services() {
  const services = [
      
    {
        title: "Retrofit Assessment",
        tag: "PAS 2035",
        price: "69",
        description:
          "Complete on-site measurement and energy modeling for compliance.",
        image: serviceimage1,
      },
      {
        title: "Design Package",
       tag: "PAS 2035",
        price: "69",
        description:
          "Detailed technical drawings and thermal bridging calculations..",
        image: serviceimage2,
      },

    {
        title: "Retrofit ",
        tag: "PAS 2035",
        price: "69",
        description:
          "End-to-end management from risk assessment to final sign-off.",
        image: serviceimage3,
      },
      {
        title: "Retrofit Coor",
        tag: "PAS 2035",
        price: "69",
        description:
          "End-to-end management from risk assessment to final sign-off.",
        image: serviceimage3,
      },
       {
        title: "Retrofit Coordinat ",
        tag: "PAS 2035",
        price: "69",
        description:
          "End-to-end management from risk assessment to final sign-off.",
        image: serviceimage3,
      },
      
      
    

    ];

    return (
      <section>
        <p  className="Services">Services</p>
        <h2 className="Retrofit-Services">Retrofit Services</h2>
         <a href="#" className="services-viewall">View All</a>
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
  export default Services;
