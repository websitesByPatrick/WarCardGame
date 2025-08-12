import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const DealButton = ({isToggle, setIsToggle}: any) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setIsToggle(!isToggle)}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#ffffff10" : "#ffffff90" },
        ]}
      >
        <Text style={styles.buttonText}>Deal</Text>
      </Pressable>
    </View>
  );
};

export default DealButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  button: {
    width: "50%",
    height: 75,
    
    borderRadius: 25,
    borderColor: "#111111",
    borderWidth: 3,
  },
  buttonText: {
    fontSize: 50,
    fontWeight: "900",
    textAlign: "center",
    marginVertical: "auto",
    paddingHorizontal: 20,
  },
});
