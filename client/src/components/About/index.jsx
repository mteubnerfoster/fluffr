import "./style.css";
import NavBar from "../NavBar";
import Header from "../Header";
import Footer from "../Footer";

const About = () => {

  const team = [
    {
      name: "Joseph",
      details: "dsjfljslfk;jslfjk;lsaflkjs;lfj;lsf",
      github: "https://github.com/joecliffordofficial",
      profile: 'https://www.linkedin.com/in/joe-clifford/',
    },
    {
      name: "Megan",
      details: "dsjfljslfk;jslfjk;lsaflkjs;lfj;lsf",
      github: "https://www.github.com/mteubnerfoster",
      profile: 'https://www.linkedin.com/in/mteubnerfoster',
    },
    {
      name: "Troy",
      details: "dsjfljslfk;jslfjk;lsaflkjs;lfj;lsf",
      github: "https://github.com/troywiegel",
      profile: 'https://www.linkedin.com/in/troywiegel/',
    },
    {
      name: "Kevin",
      details: 'aldghjapoietgna;skdlg',
      github: 'https://github.com/Cosdaman',
      profile: 'https://www.linkedin.com/in/kevin-jc-ang/',
    },
    {
      name: "Brian",
      details: 'alkdsjgoasejn',
      github: 'https://github.com/bravotango',
      profile: 'https://www.linkedin.com/in/btgraphix/',
    }
  ];

  return (
    <>
      <NavBar />
      <Header />
      <div className="container">
        <div className="row d-flex justify-content-evenly">
          {team.map((team, index) => {
            return (
              <div
                className="card col-sm-12 col-md-3 col-lg-3 m-1 text-white bg-black bg-opacity-25"
                key={index}
              >
                <div className="card-body">
                  <h5 className="card-title">{team.name}</h5>
                  <p className="card-text">{team.details}</p>
                  <a href={team.github} className="btn btn-danger">
                  <ion-icon name="logo-github"></ion-icon> 
                  </a>
                  <a href={team.profile} className="btn btn-danger">
                  <ion-icon name="logo-linkedin"></ion-icon> 
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
