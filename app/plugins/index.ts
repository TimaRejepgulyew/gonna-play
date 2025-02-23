import "react-native-gesture-handler";
import { QueryClient } from "@tanstack/react-query";

import configureI18n from "@/i18n/configureI18n";

// import { store } from "@/state/store";

const STALE_TIME = 1000 * 60 * 3;

const i18n = configureI18n();

// const queryCache = new QueryCache({
//   onError: (error: unknown) => {
//     if (error instanceof InternetOfflineError) {
//       eventBus.send(Event.InternetOffline);
//     }
//   },
// });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

const error = console.error;
console.error = (...args) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

export default {
  //   store,
  i18n,
  queryClient,
  //   queryCache,
};
