import React from "react";
export function Pokeinfo({ data }) {
  return (
    <div className="pokeinfo">
      {!data ? (
        ""
      ) : (
        <>
          <h1>{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <div className="abilities">
            
            {
                data.abilities.map((ability, index) => (
                    <p key={index}>{ability.ability.name}</p>
                ))
            }
           
          </div>
          <div className="base-stat">
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                        <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                    </>
                                )
                            })
                        }
                    </div>
        </>
      )}
    </div>
  );
}
