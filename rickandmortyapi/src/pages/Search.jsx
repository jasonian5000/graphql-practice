import React from "react";
import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import CharactersList from "./CharactersList";

const GET_SEARCH_RESULTS = gql`
  query GetSearchResults($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");
  const [getResults, { error, called, loading, data }] = useLazyQuery(
    GET_SEARCH_RESULTS,
    {
      variables: {
        name,
      },
    }
  );

  if (called && error) {
    console.log(error);
    return <div>something went wrong</div>;
  }
  if (loading) return <div>loading...</div>;
  return (
    <div>
        <h1>Search!!!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          getResults(name);
        }}
      >
        Search
      </button>
      <CharactersList data={data} />
    </div>
  );
}
