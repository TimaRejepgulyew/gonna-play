import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";
import { Text } from "~/components/ui/text";

export default function GameDetailScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { game } = route.params;

  return (
    <View className="flex-1 p-4">
      <Image source={{ uri: game.image }} className="w-full h-40 rounded-lg" />
      <View className="bg-white rounded-lg p-4">
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  detailImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  detailContent: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    marginVertical: 16,
    lineHeight: 24,
  },
});
