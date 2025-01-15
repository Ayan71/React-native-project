import { View, Text, StyleSheet,TextInput } from "react-native";
import React from "react";
import InputField from "../../components/InputField";

const inputFields = [
  { title: "Salon Name", placeholder: "Saloon Name" },
  { title: "Contact Number", placeholder: "Enter Number" },
  { title: "Salon Level", placeholder: "Enter Level" },
];

export default function RegistrationStep2() {
  return (
    <View style={styles.container}>
      {inputFields.map((field, index) => (
        <View key={index} >
          <InputField title={field.title} placeholder={field.placeholder} />
        </View>
      ))}
       <Text style={styles.title}>Description</Text>
      <TextInput
                style={styles.textArea}
                placeholder="Enter Description"
                multiline
                numberOfLines={4} 
                textAlignVertical="top"
              />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: "100%",
  },
  textArea: {
    height: 100,
    marginBottom: 25,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 15,
    backgroundColor: "#F0F0F0",
    color: "black",
  },
  title: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 16,
    marginBottom: 3,
  },
});
