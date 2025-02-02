import React from "react";
import { Card } from "./card";
import { Pokeinfo } from "./Pokeinfo";
import { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <div className="container">
      <div className="left-content">
        <Card
          pokemon={pokeData}
          loading={loading}
          infoPokemon={poke=>setPokeDex(poke)}
        />
      </div>

      <div className="right-content">
        <Pokeinfo data={pokeDex} />
      </div>
    </div>
  );
}

export default Main;
