import { View, Text, StyleSheet } from "react-native";
import React from "react";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegistrationFlow from "../screens/Register/RegistrationFlow";
import OtpVerificationScreen from "../screens/Auth/OtpVerificationScreen";

const index = () => {
  return (
    <View style={styles.Container}>
      <LoginScreen />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "right",
    marginVertical: 30,
  },
});
export default index;
