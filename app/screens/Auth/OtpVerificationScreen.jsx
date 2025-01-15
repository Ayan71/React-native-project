import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { OtpInput } from "react-native-otp-entry";

export default function OtpVerificationScreen() {
  const [seconds, setSeconds] = useState(60);

  // Countdown logic
  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [seconds]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.text}>
        Enter the 6-digit verification sent to you
      </Text>
      <View style={styles.otpContainer}>
        <OtpInput
          autoFocus={false}
          focusColor="#F2D535"
          numberOfDigits={4}
          onTextChange={(text) => console.log(text)}
          theme={{
            containerStyle: { flexDirection: "row" },
            pinCodeContainerStyle: {
              width: 50,
              height: 50,
              borderWidth: 1,
              borderColor: "#B0B0B0",
            },
          }}
        />
      </View>
      <Text
        style={[styles.resend, { opacity: seconds === 0 ? 1 : 0.5 }]}
        onPress={() => seconds === 0 && setSeconds(59)}
      >
        {seconds === 0 ? "Resend" : `00:${String(seconds).padStart(2, "0")}`}
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    gap: 20,
    position: "relative",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
  },
  otpContainer: {
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "500",
  },
  resend: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    position: "absolute",
    bottom: 15,
    width: "100%",
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
});
