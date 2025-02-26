import {
  GamePlayerLevel,
  GameStatus,
  GameType,
  PlayerPosition,
} from "@/constants/game";

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
  teamCount: number;
  substitutions: boolean;
  substitutes: number;
  hasTraining: boolean;
  trainingPrice: number | null;
  trainingDuration: number | null;
  trainingTime: Date | null;
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
  images: string[];
  address: string;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  isActive: boolean;
  attributes: GameFieldAttribute[];
}

export interface GameFieldAttribute {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface Player {
  id: number;
  avatar: string;
  createdAt: Date;
  email: string;
  isActive: boolean;
  isBanned: boolean;
  isBlocked: boolean;
  isDeleted: boolean;
  isVerified: boolean;
  level: GamePlayerLevel;
  name: string;
  phoneNumber: string;
  position: PlayerPosition;
  updatedAt: Date;
  userId: number; 
  
}
