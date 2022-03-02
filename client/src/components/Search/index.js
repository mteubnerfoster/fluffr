import React, { useState, useEffect } from 'react';
var petfinder = require('@petfinder/petfinder-js');

var client = new petfinder.Client({
  apiKey: 'FA7RNqMRl3NJ7oCh2no35IRXXnxRaz8SENNjZH2LyztrU0OhWp',
  secret: 'Gp420PyVzkrI3CdyEAwy1xYFwtcdVURyjXBe0zlE',
});

const Search = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    const getAnimals = async () => {
      client.animal
        .search()
        .then(function (response) {
          console.log(response.data.animals);
          setAnimals(response.data.animals);
        })
        .catch(function (error) {
          // Handle the error
        });
    };
    getAnimals();
  }, []);

  const card = (animal, i) => {
    return (
      <div className='col-lg-6' key={i}>
        <div className='card mb-3'>
          <div className='row g-0'>
            <div className='col-md-12 text-center'>
              <img
                src={animal.photos[0].medium}
                className='img-fluid pt-3'
                alt={animal.breeds.primary}
              />
            </div>
            <div className='col-md-12'>
              <div className='card-body'>
                <h5 className='card-title text-center'>{animal.name}</h5>
                <div className='card-text'>
                  {animal.description}
                  <ul className='list-group'>
                    <li className='list-group-item'>{animal.breeds.primary}</li>
                    <li className='list-group-item'>{animal.age}</li>
                    <li className='list-group-item'>{animal.gender}</li>
                    <li className='list-group-item'>Status {animal.status}</li>
                    <li className='list-group-item'>
                      id{' '}
                      <a href={animal.url} target='_blank'>
                        {animal.id}
                      </a>
                    </li>
                  </ul>
                </div>
                <p className='card-text'>
                  <small className='text-muted'>
                    Last updated {animal.published_at}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='container text-start'>
      <div className='row'>
        {animals.map((animal, i) => {
          if (animal.photos[0]?.medium) {
            return card(animal, i);
          }
        })}
      </div>
    </div>
  );
};
export default Search;
