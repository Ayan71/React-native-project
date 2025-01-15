import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

export default function RegistrationStep1() {
  const [selected, setSelected] = useState(null);
  const handleSelection = (item) => {
    setSelected(item);
  };

  return (
    <View style={styles.container}>
      {["Men", "Women", "Unisex"].map((item, index) => (
        <Pressable
          key={index}
          style={[styles.text, selected === item && styles.selectedText]}
          onPress={() => handleSelection(item)}
        >
          <Text style={[styles.text, selected == item && styles.textcolor]}>
            {item}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 10,
    width: "100%",
    padding: 25,
  },
  text: {
    backgroundColor: "#F0F0F0",
    textAlign: "center",
    paddingVertical: 6,
    borderRadius: 5,
    color: "grey",
  },
  selectedText: {
    borderWidth: 2,
    borderColor: "#F2D535",
    backgroundColor: "#ffff",
  },
  textcolor: {
    backgroundColor: "#ffff",
  },
});
