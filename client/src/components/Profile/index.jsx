import "./style.css";
import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Header from "../Header";
import Auth from "../../utils/auth";
import { QUERY_ME } from "../../utils/queries";
import { REMOVE_PET_FROM_FAVE } from "../../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import { Redirect } from "react-router-dom";

export const Profile = () => {
  const [removePet, { error, deleteData }] = useMutation(REMOVE_PET_FROM_FAVE);

  let pet;

  const { loading, data } = useQuery(QUERY_ME);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (Auth.loggedIn()) {
    if (data.me) {
      pet = data.me.favoritePets;
    }
  } else {
    return <Redirect to="/login" />;
  }

  const deletePet = async (e) => {
    let username = Auth.getProfile().data.username;
    const { data2 } = await removePet({
      variables: {
        petId: pet[e.target.name].petId,
        username: username,
      },
    });
    window.location.reload();
  };

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
                <img
                  className="img-fluid card-img-top"
                  src={pet.photo}
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

                  <button
                    onClick={deletePet}
                    className="btn btn-danger text-white"
                    name={index}
                  >
                    Remove
                  </button>
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
