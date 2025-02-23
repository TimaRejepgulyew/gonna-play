import { useCallback } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";

import colors from "@/theme/colors";

import type { MainScreenProps } from "@/navigation/types";
import PlayerCount from "../GameList/components/PlayerCount";
import useFormatDateTime from "@/hooks/useFormatDateTime";

export default function GameDetailScreen() {
  const { t } = useTranslation("Shared");
  const { game } = useRoute<MainScreenProps<"GameDetail">["route"]>().params;
  const { navigate } =
    useNavigation<MainScreenProps<"GameList">["navigation"]>();
  const { top } = useSafeAreaInsets();
  const { formatFullDateTime } = useFormatDateTime();

  const toGameList = useCallback(() => {
    navigate("GameList");
  }, [navigate]);

  return (
    <ScrollView className="flex-1 bg-gray-100">
      {game.images[0] ? (
        <ImageBackground
          source={{ uri: game.images[0] }}
          className={classnames.backgroundImage}
        />
      ) : null}

      <View className="w-full h-60 justify-between px-4 pb-2">
        <View
          className="flex-row justify-between items-center "
          style={{ position: "relative", top: top }}
        >
          <TouchableOpacity onPress={toGameList}>
            <Ionicons name="arrow-back" size={30} color={colors.white} />
          </TouchableOpacity>

          <View className="flex-row items-center gap-4">
            <Ionicons name="location-sharp" size={30} color={colors.white} />
            <Ionicons name="share-outline" size={30} color={colors.white} />
          </View>
        </View>

        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-white font-bold text-xl">
              {game.field.name}
            </Text>
            <Text className="text-white">{game.field.address}</Text>
          </View>

          <PlayerCount game={game} />
        </View>
      </View>

      <View className="p-4 flex-row items-center gap-2">
        <Ionicons name="calendar-outline" size={30} color={colors.black} />
        <View>
          <Text className="text-black font-bold text-lg">
            {formatFullDateTime(game?.startTime)}
          </Text>
          <Text className="text-gray-400">
            {t("MINUTES", { minutes: game.duration })}
          </Text>
        </View>
      </View>

      <View className="m-4 p-4 gap-2 bg-white rounded-md">
        <View className="flex-row items-center justify-between">
          <Text className="text-black font-bold text-lg">
            {game.field.name}
          </Text>
          <Ionicons
            name="information-circle-outline"
            size={24}
            color={colors.grey[400]}
          />
        </View>
        <View>
          <View className="gap-2 flex-row flex-wrap">
            <View className="flex-row items-center gap-2">
              <Ionicons name="people-outline" size={24} color={colors.grey[400]} />
              <Text>{t("SEATS")}</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Ionicons name="flashlight-outline" size={24} color={colors.grey[400]} />  
              <Text>{t("LIGHTING")}</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Ionicons name="water-outline" size={24} color={colors.grey[400]} />
              <Text>{t("SHOWER")}</Text>
            </View>
            <Text className="text-gray-400">{}</Text>
          </View>
        </View>
      </View>

      {/* <View className="bg-white rounded-lg p-4">
        <Text className="text-green-400 text-2xl">{game.name}</Text>
        <Text>
          Players: {game.players}/{game.maxPlayers}
        </Text>
        <Text>Location: {game.location}</Text>
        <Text style={styles.description}>
          Join us for an exciting match! All skill levels welcome.
        </Text>
        <Button
          title={game.joined ? "Leave Game" : "Join Game"}
          color={game.joined ? "red" : "green"}
          onPress={() => {
            // Implement join logic here
          }}
        />
      </View> */}
    </ScrollView>
  );
}

const classnames = {
  header: "flex-row justify-between items-center px-4",
  headerIcon: "text-white text-3xl",
  backgroundImage: "w-full h-60 absolute top-0 left-0 bg-gray-100",
} as const;
