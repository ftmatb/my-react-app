//to make an image in project in {} and import it from the fileto here and use dynamic import:
import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

//thave randomly some text or nay type od data with ant timing reloading the page:
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  const decription = reactDescriptions[getRandomInt(3)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {decription} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
