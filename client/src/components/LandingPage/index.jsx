import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../data/t.png";

const LandingPage = () => {

  return (
    <section className="container landingPageContainer">
      <div className="lpLogo">
        <img src={logo} alt="fluffr logo" />
      </div>
      <div className="lpName">
        <h1>Fluffr</h1>
      </div>
      <div className="lpStart">
        <Link to="/home" className="getStarted">
          <h2>Get Started</h2>
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
