import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {

    constructor(
        public id: number,
        public name: string,
        public type: string) {}

    public speak() {
        console.log(`${this.name} is speaking...`);
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log( data.moves[0].move );
        return data.moves;
    }
}

export const charmeleon = new Pokemon(4, 'Charmander', 'Fire');

charmeleon.getMoves();