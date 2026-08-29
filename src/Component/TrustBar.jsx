import Dexign from '../assets/Trustbar-logos/Dexigin.png'
import Emblem from '../assets/Trustbar-logos/Emblem.png'
import Neitz from '../assets/Trustbar-logos/Neitz.png'
import Optimal from '../assets/Trustbar-logos/Optimal.png'
import Wayline from '../assets/Trustbar-logos/Wayline.png'
import './TrustBar.css';  
const logos = [
  { name: "Dexign", logo: Dexign },
  { name: "Optimal", logo: Optimal },
  { name: "Emblem", logo: Emblem },
  { name: "Wayline", logo: Wayline},
  { name: "Nietzsche", logo: Neitz },
];




function TrustBar (){




return(<section className="trustbar">
  <h2>Official Trustmark Installer</h2>
  <div className="trustbar-logos">
    {logos.map((item) => (
      <img key={item.name} src={item.logo} alt={item.name} />
    ))}
  </div>
</section>
)}
export default TrustBar;
