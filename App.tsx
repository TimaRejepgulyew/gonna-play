import { StatusBar } from "expo-status-bar";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "react-native-rapi-ui";
import { QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Navigation from "@/navigation/Navigation";
import plugins from "@/plugins";

import ErrorBoundary from "@/components/ErrorBoundary";

import "./global.css";
import { useColorScheme } from "react-native";

export default function App() {
  const deviceTheme = useColorScheme();
  return (
    <ThemeProvider theme={deviceTheme === "dark" ? "dark" : "light"}>
      <I18nextProvider i18n={plugins.i18n}>
        <QueryClientProvider client={plugins.queryClient}>
          <GestureHandlerRootView className="flex-1">
            <ErrorBoundary>
              <StatusBar style="auto" />
              <Navigation />
            </ErrorBoundary>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
}
