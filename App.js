import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 3, backgroundColor: "green" }} />
        <View style={{ flex: 2, backgroundColor: "red" }} />
        <View style={{ flex: 1, backgroundColor: "blue" }} />
      </View>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ flex: 2, backgroundColor: "purple" }} />
        <View style={{ flex: 2, backgroundColor: "yellow" }} />
        <View style={{ flex: 1, backgroundColor: "pink" }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
