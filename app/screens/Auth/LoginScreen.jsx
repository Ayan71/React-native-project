import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Book Your Perfect Look in Minutes!</Text>
      <InputField title="Email"/>
      <Button buttonText="Send Code"/>
      <Text style={styles.footerText}>
        By clicking continue, you agree to our{" "}
        <Text style={styles.termsText}>Terms of Service Privacy Policy</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  header: {
    fontSize: 32,
    marginBottom: 20,
  },
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
    color: "red",
  },
  button: {
    backgroundColor: "#F2D535",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 17,
    fontWeight: "500",
  },
  footerText: {
    marginTop: 20,
    textAlign: "start",
    color: "rgba(0, 0, 0, 0.7)",
  },
  termsText: {
    color: "#F2D535",
  },
});

export default LoginScreen;
