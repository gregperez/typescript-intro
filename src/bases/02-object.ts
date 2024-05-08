export const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

pokemonIds.push(+'11');

interface Pokemon {
    id: number;
    name: string;
    type: string;
}

export const charmander: Pokemon = {
    id: 4,
    name: 'Charmander',
    type: 'Fire'
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grass'
}

export const squirtle: Pokemon = {
    id: 7,
    name: 'Squirtle',
    type: 'Water'
}

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, bulbasaur, squirtle);

console.log(pokemons);