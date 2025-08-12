import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ScoreboardProps {
  player1Score: number;
  player2Score: number;
}

const Scoreboard = ({ player1Score, player2Score }: ScoreboardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.playerContainer}>
        <Text style={styles.scoreTitleText}>Player One</Text>
        <Text style={styles.scoreText}>{player1Score}</Text>
      </View>

      <View style={styles.playerContainer}>
        <Text style={styles.scoreTitleText}>Player Two</Text>
        <Text style={styles.scoreText}>{player2Score}</Text>
      </View>
    </View>
  );
};

export default Scoreboard;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  playerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  scoreTitleText: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "600",
    width: "100%",
    textAlign: "center",
  },
  scoreText: {
    fontSize: 50,
    width: 100,
    height: 100,
    marginTop: 20,
    backgroundColor: "#000000",
    color: "#00ff00",
    borderRadius: 25,
    marginVertical: "auto",
    textAlign: "center",
    paddingTop: 15,
  },
});
