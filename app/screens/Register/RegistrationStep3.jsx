import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";

const inputFields = [
  { title: "Street Address 1", placeholder: "Street Address 1" },
  { title: "Country", placeholder: "Country" },
  { title: "State", placeholder: "State" },
  { title: "Postal Code", placeholder: "Postal Code" },
];
export default function RegistrationStep3() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
      <Button buttonText="+ Add new Address" buttonBackgroundColor="#000" buttonTextColor="#fff"/>
      </View>
      {inputFields.map((field, index) => (
        <View key={index}>
          <InputField title={field.title} placeholder={field.placeholder} />
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    width: "100%",
  },
  button:{
  paddingVertical:10
  }
});
