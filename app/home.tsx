import { View, Text } from "react-native";
import React from "react";
import Button from "@/components/controlledComponents/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "./_layout";

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <Button
        label={"Profile"}
        onPress={() => {
          navigation.navigate("profile");
        }}
        mode={"primary"}
      />
    </View>
  );
};

export default Home;
