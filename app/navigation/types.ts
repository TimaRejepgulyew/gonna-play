import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { Game } from "@/screens/GameList/types";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabsParamList {}
  }
}

export type TabsParamList = {
  Main: undefined;
  Statistics: undefined;
  Profile: undefined;
};

export type TabsRootScreenProps<Screen extends keyof TabsParamList> =
  NativeStackScreenProps<TabsParamList, Screen>;

export type MainStackParamList = {
  GameList: undefined;
  GameDetail: { game: Game };
  SearchUsers: undefined;
};

export type MainScreenProps<Screen extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, Screen>;
