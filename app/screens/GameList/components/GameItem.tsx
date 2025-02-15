import { useCallback } from "react";
import { TouchableOpacity, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { MainScreenProps } from "@/navigation/types";
import type { Game } from "../types";

const ROW_HEIGHT = 112;

export default function GameItem({
  item,
  toggleJoinGame,
}: {
  item: Game;
  toggleJoinGame: (gameId: string) => void;
}) {
  const { navigate } =
    useNavigation<MainScreenProps<"GameList">["navigation"]>();

  const toGameDetail = useCallback(() => {
    navigate('GameDetail', { game: item });
  }, [navigate, item]);

  return (
    <TouchableOpacity
      className={classnames.container}
      style={{ height: ROW_HEIGHT }}
      onPress={toGameDetail}
    >
      <View className={classnames.info}>
        <View className={classnames.imageContainer}>
          {/* <Image
            source={{ uri: item.image }}
            className={classnames.image}
          /> */}
        </View>
        <Text className={classnames.name}>{item.name}</Text>
        <Text>
          Players: {item.players}/{item.maxPlayers}
        </Text>
        <Text>Location: {item.location}</Text>
      </View>
      <Button
        title={item.joined ? "Leave" : "Join"}
        onPress={() => toggleJoinGame(item.id)}
        color={item.joined ? "red" : "green"}
      />
    </TouchableOpacity>
  );
}

const classnames = {
  container:
    " flex-1 flex-row items-center justify-between bg-white rounded-lg border border-brown-200 p-4",
  info: " flex-1 flex-row items-center justify-between bg-white rounded-md p-4",
  imageContainer: "w-20 h-20 rounded-md",
  image: "w-20 h-20 rounded-md",
  name: "text-lg font-bold",
  players: "text-sm text-gray-500",
  location: "text-sm text-gray-500",
} as const;
