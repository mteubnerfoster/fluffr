import "./style.css";
import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Header from "../Header";
import Photo from "../../data/fluffr-logo-heart-inverted-iii.png";
import Auth from "../../utils/auth";
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { Redirect} from 'react-router-dom';

export const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (Auth.loggedIn()) {
    //   if (data.me) {
    //     let favedPets = data.me.favoritePets;
    //     console.log(favedPets);
    //   }
  }else{
    return <Redirect to="/login" />;
  }

  const pets = [
    {
      name: "name 1",
      details: "dsjfljslfk;jslfjk;lsaflkjs;lfj;lsf",
      link: "http://wwww.adboptmeimcool.biz",
    },
    {
      name: "name 2",
      details: "dsjfljslfk;jslfjk;lsaflkjs;lfj;lsf",
      link: "http://wwww.adboptmeimcool.biz",
    },
    {
      name: "name 3",
      details: "dsjfljslfk;jslfjk;lsaflkjs;lfj;lsf",
      link: "http://wwww.adboptmeimcool.biz",
    },
  ];

  return (
    <>
      <Header />
      <NavBar />
      <div className="container">
        <div className="row d-flex justify-content-evenly">
          {pets.map((pet, index) => {
            return (
              <div
                className="card col-sm-12 col-md-3 col-lg-3 m-1 text-white bg-black bg-opacity-25"
                key={index}
              >
                <img
                  src={Photo}
                  className="card-img-top"
                  alt="animal up for adoption"
                />
                <div className="card-body">
                  <h5 className="card-title">{pet.name}</h5>
                  <p className="card-text">{pet.details}</p>
                  <a href={pet.link} className="btn btn-danger">
                    Adopt Me!
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
