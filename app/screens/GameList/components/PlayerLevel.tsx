import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import type { GameListItem } from "@/api/gameQueries/types";
import colors from "@/theme/colors";
import { GamePlayerLevel } from "@/constants/game";

interface Props {
  game: GameListItem;
}

const levelColors = {
  [GamePlayerLevel.Amateur]: colors.green["500"],
  [GamePlayerLevel.Master]: colors.yellow["500"],
  [GamePlayerLevel.Legend]: colors.red["500"],
};

export default function PlayerLevel({ game }: Props) {
  return (
    <View className={classnames.container}>
      <Ionicons
        name="bar-chart-outline"
        size={16}
        color={levelColors[game.gamePlayerLevel]}
      />
      <Text className="text-sm text-secondary">
        {game.gamePlayerLevelLabel}
      </Text>
    </View>
  );
}

const classnames = {
  container: "flex-row items-center gap-2 bg-gray-100 rounded-full px-2 py-1",
} as const;
