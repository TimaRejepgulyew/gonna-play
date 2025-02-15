import React, { useCallback, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { View, StyleSheet } from "react-native";

import GameItem from "./components/GameItem";

import type { ListRenderItemInfo } from "@shopify/flash-list";
import type { NavigationProp, ParamListBase } from "@react-navigation/native";

import type { Game } from "./types";

const ROW_HEIGHT = 112;

export default function GameListScreen({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const [games, setGames] = useState<Game[]>([
    {
      id: "1",
      name: "Football Match",
      players: 8,
      maxPlayers: 10,
      location: "Central Stadium",
      image: "https://example.com/football.jpg",
      joined: false,
    },
  ]);

  const toggleJoinGame = useCallback(
    (gameId: string) => {
      setGames(
        games.map((game) =>
          game.id === gameId ? { ...game, joined: !game.joined } : game
        )
      );
    },
    [games]
  );

  const renderGameItem = useCallback(
    ({ item }: ListRenderItemInfo<Game>) => (
      <GameItem item={item} toggleJoinGame={toggleJoinGame} />
    ),
    [navigation, toggleJoinGame]
  );

  return (
    <View style={styles.container}>
      <FlashList
        data={games}
        renderItem={renderGameItem}
        estimatedItemSize={ROW_HEIGHT}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  gameCard: {
    height: ROW_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  gameImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  gameInfo: {
    flex: 1,
    marginRight: 16,
  },
  gameName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  listContent: {
    paddingBottom: 16,
  },
});
