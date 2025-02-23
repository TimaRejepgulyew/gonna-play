import type { GameListPayload } from "./types";

const enum GameKeys {
  Game = "Game",
}

const GameQueryKeys = {
  GameList: (payload: GameListPayload) =>
    [GameKeys.Game, "list", payload ? JSON.stringify(payload) : ""] as const,
} as const;

export default GameQueryKeys;
