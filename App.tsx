import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Navigation from "@/navigation/Navigation";

import "./global.css";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
