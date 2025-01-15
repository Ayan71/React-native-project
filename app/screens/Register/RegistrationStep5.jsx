import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function RegistrationStep5() {
  const [images, setImages] = useState(Array(6).fill(null));

  // Function to pick image from the gallery
  const pickImage = async (index) => {
    // Request permission to access the gallery
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access gallery is required!");
      return;
    }

    // Launch the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });

    if (!result.canceled) {
      const newImages = [...images];
      newImages[index] = result.assets[0].uri;
      setImages(newImages);
      console.log(images);
    }
  };

  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.box, images[index] && { borderWidth: 0 }]}
          onPress={() => pickImage(index)}
        >
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Text style={styles.text}>+</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  box: {
    borderWidth: 1.5,
    borderColor: "grey",
    borderRadius: 10,
    padding: 10,
    width: "30%", 
    height: 120, 
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    overflow: "hidden",
  },
  text: {
    fontSize: 30,
    color: "grey",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
});
