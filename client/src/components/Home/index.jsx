import React, { useState, useMemo, useEffect } from "react";
// import { Button } from "react-native"; FUTURE FEATURE
import styled from "styled-components/native";
import TinderCard from "react-tinder-card";
import { Redirect } from "react-router-dom";
import "./style.css";
import NavBar from "../NavBar";
import { ADD_PET_TO_DB, ADD_PET_TO_USER_FAVE } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import Footer from "../Footer";
import Header from "../Header";

var petfinder = require("@petfinder/petfinder-js");

var client = new petfinder.Client({
  apiKey: process.env.REACT_APP_API_KEY,
  secret: process.env.REACT_APP_API_SECRET,
});

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

// const Header = styled.Text`
//   color: #000;
//   font-size: 30px;
//   margin-bottom: 30px;
// `;

const CardContainer = styled.View`
  width: 90%;
  max-width: 260px;
  height: 300px;
`;

const Card = styled.View`
  position: absolute;
  background-color: #fff;
  width: 100%;
  max-width: 260px;
  height: 300px;
  shadow-color: black;
  shadow-opacity: 0.2;
  shadow-radius: 20px;
  border-radius: 20px;
  resize-mode: cover;
`;

const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
`;

const CardTitle = styled.Text`
  position: absolute;
  bottom: 0;
  margin: 10px;
  color: #fff;
`;

// const Buttons = styled.View`
//   margin: 30px;
//   z-index: -100;
//   display: inline-block;
//   color: red !important;
//   border-radius: 20px;
// `;

const InfoText = styled.Text`
  height: 28px;
  justify-content: center;
  display: flex;
  z-index: -100;
`;

const Advanced = () => {
  const [animals, setAnimals] = useState([]);
  const [addPet, { error, data }] = useMutation(ADD_PET_TO_DB);
  const [addPetToFave, { errorF, dataF }] = useMutation(ADD_PET_TO_USER_FAVE);

  useEffect(async () => {
    const getAnimals = async () => {
      return client.animal.search({
        // type: 'Cat',
        limit: 100,
      });
    };
    try {
      const response = await getAnimals();
      setAnimals(response.data.animals);
    } catch (err) {
      console.log("Err!!!!", err);
    }
  }, []);

  const dbAPI = [];
  animals.map((animal) => {
    if (animal.photos[0]?.medium) {
      let animalWithPhoto = {
        name: animal.name,
        img: animal.photos[0]?.medium,
        fullProfile: animal,
      };
      dbAPI.push(animalWithPhoto);
    }
  });

  const childRefs = useMemo(
    () =>
      Array(100)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const [characters, setCharacters] = useState([]);
  const [lastDirection, setLastDirection] = useState();

  if (!Auth.loggedIn()) {
    return <Redirect to="/login" />;
  }
  const alreadyRemoved = [];
  let charactersState = dbAPI;
  // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

  const swiped = async (direction, nameToDelete, identity) => {
    if (direction == "right") {
      let username = Auth.getProfile().data.username;
      try {
        const { data } = await addPet({
          variables: {
            petId: identity.fullProfile.id,
            name: identity.fullProfile.name,
            age: identity.fullProfile.age,
            gender: identity.fullProfile.gender,
            species: identity.fullProfile.type,
            breed: identity.fullProfile.breeds.primary,
            country: identity.fullProfile.contact.address.country,
            state: identity.fullProfile.contact.address.state,
            city: identity.fullProfile.contact.address.city,
            zipCode: identity.fullProfile.contact.address.postcode,
            linkToPet: identity.fullProfile.url,
            photo: identity.fullProfile.primary_photo_cropped.large,
          },
        });

        const { data2 } = await addPetToFave({
          variables: {
            petId: identity.fullProfile.id,
            username: username,
          },
        });
      } catch (e) {
        console.error(e);
      }
    }

    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    charactersState = charactersState.filter(
      (character) => character.name !== name
    );
    setCharacters(charactersState);
  };

  const swipe = (dir) => {
    const cardsLeft = characters.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );

    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = dbAPI.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen

      console.log("child ref ting before err", childRefs);
      console.log("Indiex right before err", index);

      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  // setTimeout(() => setCharacters(dbAPI), 1000);
  const undo = () => {};

  return (
    <div>
      <Container>
        <NavBar />
        <Header />
        <CardContainer>
          {dbAPI.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              key={index}
              onSwipe={(dir) => swiped(dir, character.name, character)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <Card>
                <CardImage source={character.img}>
                  <CardTitle>{character.name}</CardTitle>
                </CardImage>
              </Card>
            </TinderCard>
          ))}
        </CardContainer>

        {/* FUTURE FEATURE: Buttons to go with swipes so users can do either */}
        {/* <div
          className='newButton'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '200px',
          }}
        >
          <Button
            onPress={() => swipe('left')}
            title={
              <ion-icon
                name='heart-dislike'
                className='heart'
                style={{ color: '#A3A7AE' }}
              ></ion-icon>
            }
          />

          <Button
            onPress={() => swipe('right')}
            title={
              <ion-icon
                name='heart'
                className='cross-heart'
                style={{ color: '#D84343' }}
              ></ion-icon>
            }
          />
        </div> */}

        {lastDirection ? (
          <InfoText key={lastDirection}>You swiped {lastDirection}</InfoText>
        ) : (
          <InfoText>Swipe right or left to get started!</InfoText>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Advanced;
