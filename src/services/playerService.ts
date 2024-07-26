import axios from 'axios';
import { Player } from '../interfaces/Player.interface';

const API_URL = 'https://opensource.aoe.com/the-card-game-data/player.json';

export const fetchPlayers = async (): Promise<Player[]> => {
  const url = API_URL;
  const response = await axios.get<Player[]>(url);
  return response.data;
};

export const postSelectedPlayer = async (player: Player): Promise<Player> => {
  const url = API_URL;
  const response = await axios.post<Player>(url, { player });
  return response.data;
};
