import { useCallback } from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

import colors from "@/theme/colors";

import type { MainScreenProps } from "@/navigation/types";

export default function GameListHeader() {
  const navigation = useNavigation<MainScreenProps<"GameList">["navigation"]>();

  const toSearchUsers = useCallback(() => {
    navigation.navigate("SearchUsers");
  }, [navigation]);

  const toNotifications = useCallback(() => {
    navigation.navigate("SearchUsers");
  }, [navigation]);

  return (
    <View className={classNames.container}>
      <TouchableOpacity onPress={toSearchUsers}>
        <Feather name="search" size={24} color={colors.secondary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={toNotifications}>
        <Ionicons
          className={classNames.notificationIcon}
          name="notifications"
          size={20}
          color={colors.grey[400]}
        />
      </TouchableOpacity>
    </View>
  );
}

const classNames = {
  container: "flex-row justify-between items-center gap-4 px-4",
  notificationIcon: "bg-gray-100 rounded-full p-2",
} as const;
