import { FC, PropsWithChildren } from "react";
import { View, Text } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/shared/colors";

export const ErrorMessage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View className="flex-row items-center mt-1">
      <MaterialIcons
        name="error-outline"
        size={16}
        color={colors["accent-red-background-primary"]}
        className="mr-1"
      />
      <Text className="text-accent-red-background-primary">{children}</Text>
    </View>
  );
};
