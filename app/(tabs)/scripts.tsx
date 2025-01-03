import { Text, View, StyleSheet } from "react-native";

export default function Scripts() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Behold the SCRIPTS screen of Linya!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2B323B",
  },
  text: {
    color: "#F6FAF0",
  },
});
