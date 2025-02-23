import { View, Image, Text } from "react-native";

import type { GameListItem } from "@/api/gameQueries/types";

function PlayerCard({ player }: { player: GameListItem["players"][number] }) {
  return (
    <View className={classnames.avatarContainer}>
      <Image
        resizeMode="cover"
        source={{ uri: player.avatar }}
        className={classnames.avatar}
      />
    </View>
  );
}

function AdditionalPlayersCount({ count }: { count: number }) {
  return (
    <View className={classnames.additionalPlayersCount}>
      <Text className="text-sm text-secondary">+{count}</Text>
    </View>
  );
}

interface Props {
  game: GameListItem;
}

function splitPlayers(players: GameListItem["players"]) {
  const maxDisplayedPlayers = 4;

  const displayedPlayers = !!players.length
    ? players.length > maxDisplayedPlayers
      ? maxDisplayedPlayers
      : players.length - 1
    : 0;

  return {
    displayedPlayers: [...players].slice(0, displayedPlayers),
    additionalPlayersCount: [...players].splice(displayedPlayers).length,
  };
}

export default function PlayersCarts({ game }: Props) {
  const { displayedPlayers, additionalPlayersCount } = splitPlayers(
    game.players
  );

  return (
    <View className={classnames.container}>
      {!!displayedPlayers.length
        ? displayedPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))
        : null}

      <AdditionalPlayersCount count={additionalPlayersCount} />
    </View>
  );
}

const classnames = {
  additionalPlayersCount:
    "w-6 h-8 bg-gray-100 border-2 border-border-primary justify-center items-center",
  avatar: "flex-1 bg-gray-100",
  avatarContainer: "w-6 h-8 bg-gray-300 border-2 border-border-primary",
  container: "flex-row bg-background-secondary",
} as const;
