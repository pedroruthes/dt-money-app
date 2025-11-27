import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SystemBars } from "react-native-edge-to-edge";

import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { useAuthContext } from "@/context/auth.context";

const NavigationRoutes = () => {
  const { token, user } = useAuthContext();

  const Routes = useCallback(() => {
    if (!user || !token) {
      return <PublicRoutes />;
    } else {
      return <PrivateRoutes />;
    }
  }, [user, token]);

  return (
    <NavigationContainer>
      <SystemBars style="light" />
      <Routes />
    </NavigationContainer>
  );
};

export default NavigationRoutes;
