import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({
  buttonText,
  buttonTextColor,
  buttonBackgroundColor,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: buttonBackgroundColor || "#F2D535" },
        ]}
      >
        <Text
          style={[styles.buttonText, { color: buttonTextColor || "black" }]}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "500",
  },
});
