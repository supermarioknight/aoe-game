import axios from 'axios';
import { Player } from '../interfaces/Player.interface';

const API_URL = 'https://opensource.aoe.com/the-card-game-data/player.json';

export const fetchPlayers = async (): Promise<Player[]> => {
    const response = await axios.get<Player[]>(API_URL);
    return response.data;
};
