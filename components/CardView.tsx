import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image"
const CardView = ({ image1, image2 }: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image1} contentFit="contain" />
      <Image style={styles.image} source={image2} contentFit="contain" />
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "row",
  },
  image: {
    width: "40%",
    margin: 20,
  },
});
