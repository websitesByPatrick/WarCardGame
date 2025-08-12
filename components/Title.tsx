import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>War!</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 2,
  },
  titleText: {
    fontSize: 100,
    color: "#ccc8c8ff",
    marginVertical: "auto",
    fontFamily: "LuckiestGuy_400Regular",
  },
});
