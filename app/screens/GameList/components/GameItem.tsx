import { useCallback } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import useFormatDateTime from "@/hooks/useFormatDateTime";

import GameField from "./GameField";
import GameName from "./GameName";
import PlayerCount from "./PlayerCount";
import PlayerLevel from "./PlayerLevel";
import PlayersCarts from "./PlayersCarts";

import type { GameListItem } from "@/api/gameQueries/types";
import type { MainScreenProps } from "@/navigation/types";

const ROW_HEIGHT = 112;

export default function GameItem({ item }: { item: GameListItem }) {
  const { formatAsTime } = useFormatDateTime();
  const user = { id: 1 };

  const { navigate } =
    useNavigation<MainScreenProps<"GameList">["navigation"]>();

  const toGameDetail = useCallback(() => {
    navigate("GameDetail", { game: item });
  }, [navigate, item]);

  return (
    <TouchableOpacity
      className={classnames.container}
      style={{ height: ROW_HEIGHT }}
      onPress={toGameDetail}
    >
      <View className={classnames.basicInfo}>
        <GameName game={item} />
        <View className={classnames.timeLocation}>
          <Text className={classnames.time}>
            {formatAsTime(item.startTime)}
          </Text>
          <Text className={classnames.location}>{item.field.address}</Text>
        </View>
        <View className={classnames.playersInfo}>
          <PlayersCarts game={item} />
          <PlayerLevel game={item} />
        </View>
      </View>
      <View className={classnames.fieldInfo}>
        <PlayerCount game={item} />
        <GameField game={item} />
      </View>
    </TouchableOpacity>
  );
}

const classnames = {
  container:
    "flex-1 bg-white flex-row rounded-2xl border border-teal-500 my-2 mx-6 p-2",
  basicInfo: "flex-3 flex-col gap-2",
  fieldInfo: "flex-1 items-end justify-between",
  timeLocation: "flex-row items-center gap-2",
  time: "text-medium font-bold",
  location: "text-gray-500",
  playersInfo: "flex-row items-centerR mt-auto gap-4",
} as const;
