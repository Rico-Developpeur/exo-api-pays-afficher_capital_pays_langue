import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//affichage d'un pays, avec des infos sur le pays
const Country = () => {
  //useStates pour mettre à jour le tableau qui est vide avec les données API
  const [pays, setPays] = useState({});

  //Suite de la route à segment dynamique;
  //ne pas oublier de mettre userParams en haut de la page
  const { country } = useParams();

  //Appel API du pays choisi
  useEffect(() => {
    axios
      //ne pas oublier de mettre le params afin d'avoir le pays que l'on veut afficher
      .get(`https://restcountries.com/v3.1/name/${country}`)
      .then((response) => response.data)
      .then((data) => {
        //nous recuperons que les data de l'indice 0
        setPays(data[0]);
      });
  }, []);

  //j'affiche les infos du pays que j'ai choisi.
  return (
    <div>
      {/* rendu conditionnel lors d'un appel a l'API;
        pour afficher les resulats une fois arrivé. */}
      {pays && pays.name && (
        <>
          <h2>{pays.name.official}</h2>
          <h3>Capital : {pays.capital}</h3>
          <p>Region : {pays.region}</p>
          {/* Comment transformer et afficher le resulat au format voulu;
          join() permet de mettre un espace et une virgule entre chaque langue */}
          <p>Langues : {Object.values(pays.languages).join(", ")}</p>
        </>
      )}
    </div>
  );
};

export default Country;
