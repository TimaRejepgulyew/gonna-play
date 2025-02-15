export interface Game {
  id: string;
  name: string;
  players: number;
  maxPlayers: number;
  location: string;
  image: string;
  joined: boolean;
}
