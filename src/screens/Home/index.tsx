import { useAuthContext } from "@/context/auth.context";
import { View, Text, TouchableOpacity } from "react-native";

export const Home = () => {
  const { handleLogout } = useAuthContext();

  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};
