import { useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { GameListHeader } from "@/screens/GameList";
import GameListScreen from "@/screens/GameList";
import GameDetailScreen from "@/screens/GameDetail";
import SearchUsers from "@/screens/SearchUsers";

import type { StackNavigationOptions } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function MainNavigator() {
  const renderGameListHeader = useCallback(
      (): StackNavigationOptions => ({
        headerTitleAlign: "left",
        headerTitle: "Tbilisi Games",
        headerRight: () => <GameListHeader />,
      }),
      []
    );
  
    const renderGameDetailHeader = useCallback(
      (): StackNavigationOptions => ({
        title: "",
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