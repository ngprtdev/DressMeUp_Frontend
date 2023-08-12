import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ButtonOptions({handleTopSubmit}) {
  return (
    <TouchableOpacity style={styles.buttonOptions} activeOpacity={0.8} onPress={handleTopSubmit}>
      <Text style={styles.textButton}>Plus d'options</Text>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  buttonOptions: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#CCE3DE",
    padding: 12,
    borderRadius: 10,
    marginTop: 30,
  },
  textButton: {
    fontFamily: "Lora-SemiBold",
    color:"black",
  },
});
