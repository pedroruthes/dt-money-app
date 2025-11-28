import { useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import CurrencyInput from "react-native-currency-input";

import { CreateTransactionInterface } from "@/shared/interfaces/https/create-transaction-request";
import { useBottomSheetContext } from "@/context/bottomsheet.context";

import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/shared/colors";

export const NewTransaction = () => {
  const { closeBottomSheet } = useBottomSheetContext();

  const [transaction, setTransaction] = useState<CreateTransactionInterface>({
    categoryId: 0,
    description: "",
    typeId: 0,
    value: 0,
  });

  const setTransactionData = (
    key: keyof CreateTransactionInterface,
    value: string | number
  ) => {
    setTransaction((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <View className="px-8 py-5">
      <TouchableOpacity
        onPress={closeBottomSheet}
        className="w-full flex-row items-center justify-between"
      >
        <Text className="text-white text-xl font-bold">Nova transação</Text>
        <MaterialIcons name="close" color={colors.gray[700]} size={20} />
      </TouchableOpacity>

      <View className="flex-1 mt-8 mb-8">
        <TextInput
          onChangeText={(text) => setTransactionData("description", text)}
          className="text-white text-lg h[50px] bg-background-primary my-2 rounded-[6] pl-4"
          placeholder="Descrição"
          placeholderTextColor={colors.gray[700]}
          value={transaction.description}
        />

        <CurrencyInput
          className="text-white text-lg h[50px] bg-background-primary my-2 rounded-[6] pl-4"
          prefix="R$ "
          delimiter="."
          separator=","
          precision={2}
          minValue={0}
          onChangeValue={(value) => setTransactionData("value", value ?? 0)}
          value={transaction.value}
        />
      </View>
    </View>
  );
};
