import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import RegistrationStep1 from "./RegistrationStep1";
import RegistrationStep2 from "./RegistrationStep2";
import Ionicons from "@expo/vector-icons/Ionicons";
import RegistrationStep3 from "./RegistrationStep3";
import RegistrationStep4 from "./RegistrationStep4";
import RegistrationStep5 from "./RegistrationStep5";
import RegistrationStep6 from "./RegistrationStep6";

export default function RegistrationFlow() {
  const [step, setStep] = useState(1);
  const handleButtonStep = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salon Registraton</Text>
      <View style={styles.header}>
        {step != 1 && (
          <Ionicons
            onPress={() => setStep(step - 1)}
            style={styles.icon}
            name="chevron-back-outline"
            size={20}
            color="black"
          />
        )}

        <Text style={styles.stepShow}>Step {step} of 6</Text>
      </View>
      {step == 1 && <RegistrationStep1 />}
      {step == 2 && <RegistrationStep2 />}
      {step == 3 && <RegistrationStep3 />}
      {step == 4 && <RegistrationStep4 />}
      {step == 5 && <RegistrationStep5 />}
      {step == 6 && <RegistrationStep6/>}

      <TouchableOpacity style={styles.button} onPress={handleButtonStep}>
        <Text style={styles.buttonText}>
          {step == "6" ? "Submit " : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    position: "relative",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    position: "absolute",
    left: -120,
  },
  title: {
    fontSize: 20,
    paddingVertical: 15,
  },
  stepShow: {
    fontSize: 18,
    paddingVertical: 15,
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
