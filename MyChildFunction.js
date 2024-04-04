import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

function MyChildFunction(props) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "pink", fontSize: 24 }}>
        {props.title} Count: {props.count}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyChildFunction;
