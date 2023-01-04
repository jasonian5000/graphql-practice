import React from "react";
import { Link } from "react-router-dom";
import "./CharactersList.css";

export default function CharactersList(props) {
  return (
    <div className="CharacterList">
      {props.data?.characters.results.map((character) => {
        return (
          <Link to={character.id}>
            <img src={character.image} alt="character" />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
