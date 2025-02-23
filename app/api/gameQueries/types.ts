import { Game } from "@/types/Game";

export interface GameListPayload {
  limit: number;
  offset: number;
}
export interface GameListItem extends Game {
  gameTypeLabel: string;
  gameStatusLabel: string;
  gamePlayerLevelLabel: string;
}
