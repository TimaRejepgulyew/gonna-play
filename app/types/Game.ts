import { GamePlayerLevel, GameStatus, GameType } from "@/constants/game";

export interface Game {
  id: number;
  ownerId: number;
  players: Player[];
  gameType: GameType;
  gameStatus: GameStatus;
  gamePlayerLevel: GamePlayerLevel;
  description: string;
  images: string[];
  field: GameField;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  isActive: boolean;
  isPublic: boolean;
  playerPerTeam: number;
  price: number;
  currency: string;
  isFree: boolean;
  isPaid: boolean;
  startTime: Date;
  duration: number;
}

export interface GameField {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  isActive: boolean;
}

export interface Player {
  id: number;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  isActive: boolean;
  name: string;
  level: GamePlayerLevel;
}
