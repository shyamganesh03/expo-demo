import { InputModeOptions, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

const PasswordInput = ({
  placeholder,
  value,
  onChange = () => {},
  mode = "text",
  enable = true,
}: {
  placeholder: string;
  value: string;
  onChange?: any;
  mode?: InputModeOptions;
  enable?: boolean;
}) => {
  const [textInputValue, setTextInputValue] = useState("");

  useEffect(() => {
    if (mode === "numeric") {
      const number = Number(value);
      if (!isNaN(number)) {
        setTextInputValue(value);
      }
    } else {
      setTextInputValue(value);
    }
  }, [value]);
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.textInputStyle}
      value={textInputValue}
      onChangeText={onChange}
      inputMode={mode}
      autoCapitalize="none"
      editable={enable}
    />
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderColor: "lightgrey",
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
  },
});

export default PasswordInput;
