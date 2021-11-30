import './App.scss';
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    number: "",
    species: "",
    image: "",
    backImage: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    type: "",
  });

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (res) => {
        setPokemon({
          name: pokemonName,
          number: res.data.id,
          species: res.data.species.name,
          image: res.data.sprites.front_default,
          backImage:res.data.sprites.back_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
          type: res.data.types[0].type.name,
        });
        setPokemonChosen(true);
      }
    );
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <h1 className="title-browser"><img src="https://img.icons8.com/bubbles/100/000000/pokeball.png"/> POKEMON BROWSER </h1>
        <p>Choose a Pokemon:</p>
        <input type="text" onChange={(event) => {
          setPokemonName(event.target.value);
        }}
        value={pokemonName.toLowerCase()} />
        <button onClick={searchPokemon}>Search Pokémon</button>
      </div>
      <div className="DisplaySection">
        {!pokemonChosen ? (
          <div className="choosing-container">
          <h1 className="choosing-title"> Please choose a Pokémon </h1>
          </div>
        ) : ( 
          <>
          <h1 className="pokemon-name">{pokemon.name.toUpperCase()}</h1>
          <div className="container">            
            <div className="image-container">
            <img className="front_image" src={pokemon.image} alt={pokemon.name} />
            <img  className="back_image" src={pokemon.backImage} alt={pokemon.name} />
            </div>
            <div className="detail-container">
              <h3 className="pokemon-details">Number: #{pokemon.number}</h3>
            <h3 className="pokemon-details">Species: {pokemon.species}</h3>
            <h3 className="pokemon-details">Type: {pokemon.type}</h3>
            <h4 className="pokemon-details">Hp: {pokemon.hp}</h4>
            <h4 className="pokemon-details">Attack: {pokemon.attack}</h4>
            <h4 className="pokemon-details">Defense: {pokemon.defense}</h4>
            <h4 className="pokemon-details">Speed: {pokemon.speed}</h4>
          </div>
            
            </div>
            
          </>
        )}
      </div>
    </div>
  );
}

export default App;