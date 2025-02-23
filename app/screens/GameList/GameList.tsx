import React, { useCallback } from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { useGameListQueries } from "@/api/gameQueries";

import GameItem from "./components/GameItem";

import type { ListRenderItemInfo } from "@shopify/flash-list";
import type { NavigationProp, ParamListBase } from "@react-navigation/native";
import type { GameListItem } from "@/api/gameQueries/types";

const ROW_HEIGHT = 112;

export default function GameListScreen({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const { data: games = [] } = useGameListQueries({
    limit: 10,
    offset: 0,
  });

  const renderGameItem = useCallback(
    ({ item }: ListRenderItemInfo<GameListItem>) => <GameItem item={item} />,
    []
  );

  return (
    <View className={classnames.container}>
      <FlashList
        data={games}
        estimatedItemSize={ROW_HEIGHT}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderGameItem}
      />
    </View>
  );
}

const classnames = {
  container: "flex-1 bg-white",
} as const;
