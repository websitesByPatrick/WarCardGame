import CardView from "@/components/CardView";
import DealButton from "@/components/DealButton";
import Scoreboard from "@/components/Scoreboard";
import Title from "@/components/Title";
import { cards } from "@/lib/cards";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const [imagePath1, setImagePath1] = useState(null);
  const [imagePath2, setImagePath2] = useState(null);
  const [isToggle, setIsToggle] = useState(true);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const DealCards = (buttonToggle: boolean) => {
    useEffect(() => {
      const min = 0;
      const max = 12;
      const cardIndex1 = Math.floor(Math.random() * (max - min + 1) + min);
      const cardIndex2 = Math.floor(Math.random() * (max - min + 1) + min);

      const card1 = cards[cardIndex1];
      const card2 = cards[cardIndex2];
      const image1 = card1?.image;
      const image2 = card2?.image;
      setImagePath1(image1);
      setImagePath2(image2);

      if (card1.value > card2.value) {
        setPlayer1Score(player1Score + 1);
      } else if (card2.value > card1.value) {
        setPlayer2Score(player2Score + 1);
      }
    }, [buttonToggle]);
  };

  DealCards(isToggle);

  return (
    <View style={styles.container}>
      <Title />
      <Scoreboard player1Score={player1Score} player2Score={player2Score} />
      <CardView image1={imagePath1} image2={imagePath2} />
      <DealButton isToggle={isToggle} setIsToggle={setIsToggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E5C3A",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
