import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { Colors } from "@/constants/Colors";
import { useTheme } from "@react-navigation/native";

type ButtonProps = {
  label: string;
  onPress: any;
  mode: "primary" | "secondary" | "outlined";
};
const Button = ({
  label,
  onPress = () => {},
  mode = "primary",
}: ButtonProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => {
    if (mode === "primary") {
      return {
        containerStyle: {
          backgroundColor: colors.primary,
          padding: 12,
          borderRadius: 15,
          alignItems: "center",
        },
        textStyle: {
          color: "#ffffff",
        },
      };
    } else {
      return {
        containerStyle: {},
        textStyle: {},
      };
    }
  }, [mode]);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
