import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.headerText}>Welcome to{"\n"}Linya</Text>
        {"\n"}
        <Text style={styles.subText}>Select scripts to get started</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2B323B",
  },
  text: {
    color: "#F6FAF0",
    textAlign: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: 600,
  },
  subText: {
    fontSize: 18,
  },
});
