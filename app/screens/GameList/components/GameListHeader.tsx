import { useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

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
    <>
      <TouchableOpacity onPress={toSearchUsers}>
        <Feather
          className="px-4"
          style={{ paddingHorizontal: 16 }}
          name="search"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={toNotifications}>
        <Ionicons
          className="px-4"
          style={{ paddingHorizontal: 16 }}
          name="notifications"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </>
  );
}
