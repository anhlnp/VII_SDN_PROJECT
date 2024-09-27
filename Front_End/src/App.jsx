import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import store from "./store.js";

import {
  Home,
  PageLayout,
} from "./pages/index.js";
import paths from "./utils/paths.js";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});
  return (
      <Provider store={store}>  
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Routes>
          <Route element={<PageLayout />}>
            <Route path={paths.HOME} element={<Home />} />
          </Route>
        </Routes>
      </QueryClientProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            // color: "var(--color-grey-700)",
          },
        }}
      />
    </Provider>
  );
}

export default App;
