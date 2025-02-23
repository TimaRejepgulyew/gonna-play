import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { createStackNavigator } from "@react-navigation/stack";

import { GameListHeader } from "@/screens/GameList";
import GameListScreen from "@/screens/GameList";
import GameDetailScreen from "@/screens/GameDetail";
import SearchUsers from "@/screens/SearchUsers";

import type { StackNavigationOptions } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function MainNavigator() {
  // const currentCity = useSelector((state: RootState) => state.city.currentCity);
  const currentCity = "Tbilisi";
  const { t } = useTranslation("GameList");

  const renderGameListHeader = useCallback(
    (): StackNavigationOptions => ({
      
      headerTitleAlign: "left",
      headerTitle: t("GAMES_IN_CITY", { city: currentCity }),
      headerRight: () => <GameListHeader />,
      animation: "slide_from_left",
    }),
    [currentCity, t]
  );

  const renderGameDetailHeader = useCallback(
    (): StackNavigationOptions => ({
      title: "",
      headerShown: false,
      animation: "slide_from_right",
    }),
    []
  );

  return (
    <Stack.Navigator initialRouteName="GameList">
      <Stack.Screen
        options={renderGameListHeader}
        name="GameList"
        component={GameListScreen}
      />

      <Stack.Screen
        options={renderGameDetailHeader}
        name="GameDetail"
        component={GameDetailScreen}
      />
      <Stack.Screen name="SearchUsers" component={SearchUsers} />
    </Stack.Navigator>
  );
}
