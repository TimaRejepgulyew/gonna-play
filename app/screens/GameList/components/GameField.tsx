import { Image } from "react-native";

import type { GameListItem } from "@/api/gameQueries";

interface Props {
  game: GameListItem;
}

export default function GameField({ game }: Props) {
  return (
    <Image
      className="w-[120] h-[60] rounded-md bg-gray-200"
      source={{ uri: game.images[0] }}
    />
  );
}
