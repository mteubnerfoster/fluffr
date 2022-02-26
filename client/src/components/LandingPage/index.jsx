import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../data/fluffr-logo-circle.png";
import heroVid from "../../data/dog-hero-video.mp4";

const LandingPage = () => {
  return (
    <>
      <section className="container d-flex flex-column justify-content-around landingPageContainer">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%",
            zIndex: "-1",
          }}
        >
          <source src={heroVid} type="video/mp4" />
        </video>
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
