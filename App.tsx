import { StatusBar } from "expo-status-bar";
import { I18nextProvider } from "react-i18next";
import { QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Navigation from "@/navigation/Navigation";
import plugins from "@/plugins";

import ErrorBoundary from "@/components/ErrorBoundary";

import "./global.css";

export default function App() {
  return (
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
  );
}
