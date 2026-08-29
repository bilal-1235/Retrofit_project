import "./Howitsworks.css";
import step1Image from "../assets/Howitsworks/Step1.png";
import step2Image from "../assets/Howitsworks/Step2.png";
import step3Image from "../assets/Howitsworks/Step3.png";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose your service",
      description:
        "Browse our transparent service catalogue. Select assessment, design, coordination or full package.",
      image: step1Image,
    },
    {
      number: "02",
      title: "We do the heavy lifting",
      description:
        "Certified team manages surveys, design, funding, installation and full PAS 2035 compliance",
      image: step2Image,
    },
    {
      number: "03",
      title: "Receive deliverables",
      description:
        "Final report, compliance certificate, photos and all audit-ready documentation.",
      image: step3Image,
    },
  ];

  return (
    <section>
      <p className="howitworks-label"> How its Works</p>
      <h2 className="howitworks-title">From interest to <br/> completion in weeks</h2>
      <div className="howitworks-steps">
        {steps.map((item, index) => (
          <div
            key={item.number}
            className={
              index % 2 === 1 ? "howitworks-step reverse" : "howitworks-step"
            }
          >
            <img src={item.image} alt={item.title} />
            <div className="howitworks-step-text">
              <span className="howitworks-step-number">{item.number}</span>
              <h3 className="howitworks-step-title">{item.title}</h3>
              <p className="howitworks-step-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default HowItWorks;
