import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function InputField({ title, placeholder }) {  
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 16,
    marginBottom: 3,
  },
  input: {
    height: 47,
    marginBottom: 25,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 15,
    backgroundColor: "#F0F0F0",
    color: "black",
  },
});
