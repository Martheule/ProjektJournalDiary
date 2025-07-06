import { useState, useEffect } from 'react';
import PokemonCard from '../';


const Home = () => {
const [allPokemon, setAllPokemon] = useState ([]);
console.log(allPokemon);

useEffect (() => {
    const fetchAllPokemon = async () => {
try {
const response = await fetch('https://pokeapi.co/api/v2/pokemon');
if (!response.ok) {
    throw new Error('Something went wrong!');
}

console.log(response);

const data = await response.json();

setAllPokemon(data.results);


} catch (error) {
    console.log(error);
}
};

fetchAllPokemon();
}, []);

return <main>
    {allPokemon.map((pokemon) => (
<PokemonCard key={pokemon.name} pokemon={pokemon} />

    ))}
    
</main>;
);

};
export default Home;