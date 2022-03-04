import "./style.css";
import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Header from "../Header";
import Photo from "../../data/fluffr-logo-heart-inverted-iii.png";
import Auth from "../../utils/auth";
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";

export const Profile = () => {
  let pet;

  const { loading, data } = useQuery(QUERY_ME);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (Auth.loggedIn()) {
    if (data.me) {
      pet = data.me.favoritePets;
      console.log(pet);
    }
  } else {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header />
      <NavBar />
      <div className="container">
        <div className="row d-flex justify-content-evenly">
          {pet.map((pet, index) => {
            return (
              <div
                className="card col-sm-12 col-md-3 col-lg-3 m-1 text-white bg-black bg-opacity-25"
                key={index}
              >
                <img className="img-fluid"
                  src={pet.photo}
                  className="card-img-top"
                  alt="animal up for adoption"
                />
                <div className="card-body">
                  <h5 className="card-title">{pet.name}</h5>
                  <p className="card-text">{pet.breed}</p>
                  <a
                    href={pet.linkToPet}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger"
                  >
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
