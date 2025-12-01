import NavigationRoutes from "@/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AuthContextProvider } from "@/context/auth.context";
import { BottomSheetProvider } from "@/context/bottomsheet.context";
import { SnackbarContextProvider } from "@/context/snackbar.context";
import { TransactionContextProvider } from "@/context/transaction.context";

import { Snackbar } from "@/components/Snackbar";

import "./src/styles/global.css";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <SnackbarContextProvider>
        <AuthContextProvider>
          <TransactionContextProvider>
            <BottomSheetProvider>
              <NavigationRoutes />
              <Snackbar />
            </BottomSheetProvider>
          </TransactionContextProvider>
        </AuthContextProvider>
      </SnackbarContextProvider>
    </GestureHandlerRootView>
  );
}
