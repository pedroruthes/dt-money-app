import NavigationRoutes from "@/routes";
import { AuthContextProvider } from "@/context/auth.context";
import { BottomSheetProvider } from "@/context/bottomsheet.context";
import { SnackbarContextProvider } from "@/context/snackbar.context";

import { Snackbar } from "@/components/Snackbar";

import "./src/styles/global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <SnackbarContextProvider>
        <AuthContextProvider>
          <BottomSheetProvider>
            <NavigationRoutes />
            <Snackbar />
          </BottomSheetProvider>
        </AuthContextProvider>
      </SnackbarContextProvider>
    </GestureHandlerRootView>
  );
}
