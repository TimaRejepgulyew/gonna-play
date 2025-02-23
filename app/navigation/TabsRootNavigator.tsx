import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import colors from "@/theme/colors";

import SearchUsers from "@/screens/SearchUsers";
import MainNavigator from "./MainNavigator";

const Tabs = createBottomTabNavigator();

export default function TabsNavigator() {

  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Main"
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.secondary,
          headerShown: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "football" : "football-outline"}
                color={color}
                size={size}
              />
            ),
            title: "",
          }}
          name="Main"
          component={MainNavigator}
        />

        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "bar-chart" : "bar-chart-outline"}
                color={color}
                size={size}
              />
            ),
            title: "",
          }}
          name="Statistics"
          component={SearchUsers}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                color={color}
                size={size}
              />
            ),
            title: "",
          }}
          name="Profile"
          component={SearchUsers}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
} as const);
