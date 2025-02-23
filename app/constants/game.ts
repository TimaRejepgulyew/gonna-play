export enum GameType {
  Ranked,
  Friendly,
  TeamDraft,
}

export enum GamePlayerLevel {
  Amateur,
  Master,
  Legend,
}

export enum GameStatus {
  Pending,
  Active,
  Completed,
}

export const GameTypeMap: Record<GameType, string> = {
  [GameType.Ranked]: "GAME_TYPE_RANKED",
  [GameType.Friendly]: "GAME_TYPE_FRIENDLY",
  [GameType.TeamDraft]: "GAME_TYPE_TEAM_DRAFT",
};

export const GamePlayerLevelMap: Record<GamePlayerLevel, string> = {
  [GamePlayerLevel.Amateur]: "GAME_PLAYER_LEVEL_AMATEUR",
  [GamePlayerLevel.Master]: "GAME_PLAYER_LEVEL_MASTER",
  [GamePlayerLevel.Legend]: "GAME_PLAYER_LEVEL_LEGEND",
};

export const GameStatusMap: Record<GameStatus, string> = {
  [GameStatus.Pending]: "GAME_STATUS_PENDING",
  [GameStatus.Active]: "GAME_STATUS_ACTIVE",
  [GameStatus.Completed]: "GAME_STATUS_COMPLETED",
};
