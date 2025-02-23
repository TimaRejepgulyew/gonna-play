import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "@/theme/colors";

import type { GameListItem } from "@/api/gameQueries";

interface Props {
  game: GameListItem;
}

export default function PlayerCount({ game }: Props) {
  const fullyJoinedColors = game.playerPerTeam > game.players.length;
  return (
    <View
      className={
        classnames.container +
        " " +
        (fullyJoinedColors ? "bg-green-50" : "bg-yellow-50")
      }
    >
      <Ionicons
        name="people-outline"
        size={20}
        color={fullyJoinedColors ? colors.green[400] : colors.yellow[400]}
      />
      <Text className={classnames.text}>
        {game.players.length}/{game.playerPerTeam * 2}
      </Text>
    </View>
  );
}

const classnames = {
  container: "flex-row items-center gap-2 rounded-full px-2 py-1",
  text: "text-gray-500 font-medium",
} as const;
