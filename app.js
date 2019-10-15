const pokemonName = document.getElementById('pokemon-name');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonFrontImg = document.getElementById('pokemon-img-front');
const pokemonNumber = document.getElementById('pokemon-number');
const pokemonWeight = document.getElementById('pokemon-weight');
const pokemonAbilities = document.getElementById('pokemon-abilites');

const pokemonApiUrl = 'https://pokeapi.co/api/v2/';

let getPokemonData = async ()=> {
    const respose = await fetch(`${pokemonApiUrl}pokemon/151`);
    const pokemon = await respose.json();
    console.log(pokemon);
    const {name , height,} = pokemon;
    const frontImg = pokemon.sprites.front_default;
   

    pokemonName.innerText = name;
    pokemonHeight.innerText = `altura : ${height}`;
    
};

getPokemonData();