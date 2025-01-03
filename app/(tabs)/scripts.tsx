import { Text, View, StyleSheet } from "react-native";
import * as Colors from "@/constants/Colors";
import * as Test from "@/constants/TestData";
import Button from "@/components/Button";
import { FlatList } from "react-native-gesture-handler";

export default function Scripts() {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.scriptContainer}>
        <Text style={styles.scriptTitle}>{item.title} </Text>
        <Text style={styles.scriptCharacter}>{item.character}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* only show this line if no scripts are saved within the application */}
      <Text style={styles.text}>
        Press the 'Add Script' below to get started!
      </Text>
      <FlatList
        data={Test.scriptData}
        renderItem={renderItem}
        onRefresh={() => console.log("refreshing")}
      />
      <Button
        color={Colors.BLUE}
        label="Add Script"
        onPress={() => alert("Adding Script")}
      />
      <Button
        color={Colors.WHITE}
        label="Edit Script"
        onPress={() => alert("Editing Script")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.GREY,
  },
  text: {
    color: Colors.WHITE,
  },
  scriptContainer: {
    color: Colors.GREY,
    backgroundColor: Colors.WHITE,
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 10,
    borderRadius: 10,
  },
  scriptTitle: {
    fontSize: 32,
    fontWeight: 600,
  },
  scriptCharacter: {
    fontSize: 18,
  },
});
