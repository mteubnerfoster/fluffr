import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Header from "../Header";
import Auth from "../../utils/auth";
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";

export const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  }
  let favedPets = data.me.favoritePets;
  console.log(favedPets);
  return (
    <>
      <Header />
      <NavBar />
      <div>Profile</div>
      <Footer />
    </>
  );
};
