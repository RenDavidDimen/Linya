import { StyleSheet, View, Pressable, Text } from "react-native";
import * as Colors from "@/constants/colors";

type Props = {
  color: string;
  label: string;
  theme?: "primary";
  onPress?: () => void;
};

export default function Button({ color, label, theme, onPress }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[styles.button, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    fontSize: 16,
  },
});
