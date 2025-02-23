import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { GameType } from "@/constants/game";
import colors from "@/theme/colors";

import type { GameListItem } from "@/api/gameQueries/types";

interface Props {
  className?: string;
  game: GameListItem;
}

export default function GameName({ game, className }: Props) {
  const composedClassName = `${classnames.displayName} ${className}` as const;

  return (
    <View className={classnames.container}>
      {game.gameType !== GameType.TeamDraft ? (
        <Ionicons
          className={classnames.icon}
          name="football"
          size={24}
          color={colors.white}
        />
      ) : null}
      <Text className={composedClassName}>
        {game.playerPerTeam}x{game.playerPerTeam} {game.gameTypeLabel}
      </Text>
    </View>
  );
}

const classnames = {
  container: "flex-row items-center gap-2",
  icon: "bg-primary rounded-full p-1",
  displayName: "font-medium text-lg text-black",
} as const;
