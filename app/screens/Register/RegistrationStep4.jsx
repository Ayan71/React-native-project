import React from "react"
import { View,StyleSheet } from "react-native"
import InputField from "../../components/InputField";

export default function RegistrationStep4(){
  return (
    <View style={styles.container}>
     <InputField title="Services" placeholder="Service Name"/>
     <InputField title="Price" placeholder="Price"/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    width: "100%",
  },
});
