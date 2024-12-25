import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";
import InputText from "@/components/controlledComponents/InputText";
import PasswordInput from "@/components/controlledComponents/PasswordInput";
import Button from "@/components/controlledComponents/Button";

const { height, width } = Dimensions.get("screen");

const SignIn = () => {
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: "",
  });

  const firebaseAuth = auth();

  const handleFirebaseLogin = async () => {
    try {
      const loginResult = await firebaseAuth.signInWithEmailAndPassword(
        loginDetails.userName,
        loginDetails.password
      );
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
          Login to your account.
        </Text>
        <View style={{ gap: 14 }}>
          <InputText
            placeholder={"UserName / Email"}
            value={loginDetails.userName}
            onChange={(text: string) =>
              setLoginDetails((prev) => ({
                ...prev,
                userName: text,
              }))
            }
          />
          <PasswordInput
            placeholder={"Password"}
            value={loginDetails.password}
            onChange={(text: string) =>
              setLoginDetails((prev) => ({
                ...prev,
                password: text,
              }))
            }
          />
          <Button
            label={"Sign In"}
            onPress={handleFirebaseLogin}
            mode={"primary"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width,
    paddingTop: 60,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    gap: 30,
  },
});

export default SignIn;
