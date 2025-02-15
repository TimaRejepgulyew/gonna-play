import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SearchUsers from "@/screens/SearchUsers";

import MainNavigator from "./MainNavigator";

const Tabs = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <NavigationContainer>
      <Tabs.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Main" component={MainNavigator} />
        <Tabs.Screen name="Statistics" component={SearchUsers} />
        <Tabs.Screen name="Profile" component={SearchUsers} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
