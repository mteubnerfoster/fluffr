import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../data/fluffr-logo-heart-inverted-iii.png";
import heroVid from "../../data/dog-hero-video.mp4";

const LandingPage = () => {
  return (
    <>
      <section className="container img-fluid d-flex flex-column justify-content-around landingPageContainer">
        <video src={heroVid} autoPlay loop muted></video>
        <div className="lpLogo">
          <img className="img-fluid" src={logo} alt="fluffr logo" />
        </div>
        <div className="card col-sm-6 col-md-4 col-lg-2 align-self-center rounded-pill text-light bg-danger bg-opacity-75">
          <div className="card-body lpName">
            <h5 className="card-title lpNameHeader">Fluffr</h5>
            <p className="card-text lpNameP">find your furever friend</p>
          </div>
        </div>
        <Link to="/home" className="lpStart">
          <button
            type="button"
            className="btn btn-lg rounded-pill text-light bg-danger bg-opacity-75"
          >
            Get Started
          </button>
        </Link>
      </section>
    </>
  );
};

export default LandingPage;
