import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class MyChildClass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 24, color: "red" }}>
          {/* child receives data from parent using props */}
          {this.props.title} Count: {this.props.count}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyChildClass;
