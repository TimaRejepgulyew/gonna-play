import {
  GameTypeMap,
  GameStatusMap,
  GamePlayerLevelMap,
} from "@/constants/game";

import type { TFunction } from "i18next";
import type { Game } from "@/types/Game";
import type { GameListItem } from "./types";

export function gameListAdapter(
  {
    id,
    ownerId,
    players,
    gameType,
    gameStatus,
    gamePlayerLevel,
    description,
    images,
    field,
    createdAt,
    updatedAt,
    isDeleted,
    isActive,
    isPublic,
    playerPerTeam,
    price,
    currency,
    isFree,
    isPaid,
    startTime,
    duration,
  }: Game,
  t: TFunction
): GameListItem {
  return {
    id,
    createdAt,
    currency,
    description,
    duration,
    field,
    gamePlayerLevel,
    gamePlayerLevelLabel: t(GamePlayerLevelMap[gamePlayerLevel]),
    gameStatus,
    gameStatusLabel: t(GameStatusMap[gameStatus]),
    gameType,
    gameTypeLabel: t(GameTypeMap[gameType]),
    images,
    isActive,
    isDeleted,
    isFree,
    isPaid,
    isPublic,
    ownerId,
    playerPerTeam,
    players,
    price,
    startTime,
    updatedAt,
  };
}
