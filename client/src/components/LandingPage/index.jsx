import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../data/fluffr-logo-circle.png";
import heroVid from "../../data/dog-hero-video.mp4";

const LandingPage = () => {
  return (
    <>
      <section className="container img-fluid d-flex flex-column justify-content-around landingPageContainer">
        <video src={heroVid} autoPlay loop muted></video>
        <div className="lpLogo">
          <img className="img-fluid" src={logo} alt="fluffr logo" />
        </div>
        <div className="lpName">
          <h1>Fluffr</h1>
        </div>
        <div className="lpStart">
          <Link to="/home" className="getStarted">
            <h2>Get Started!</h2>
          </Link>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
