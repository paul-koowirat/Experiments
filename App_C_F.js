import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MyClass from "./MyClass";
//import MyChildClass from "./MyChildClass";
import MyFunction from "./MyFunction";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: "green" }}>Class/Function Test</Text>
      {/*<MyClass />*/}
      <MyFunction />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
