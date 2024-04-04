import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MyChildClass from "./MyChildClass";
import MyChildFunction from "./MyChildFunction";

class DisplayInfoClass extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 24, color: "violet" }}>
          {/* child receives data from parent using props */}
          {this.props.title} Count: {this.props.count}
        </Text>
      </View>
    );
  }
}

class MyClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 5,
      title: "Main Class",
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
    //console.log("Current state", this.state.count);
  };

  /*incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    //console.log("Previous State", this.state.count);
  };*/

  render() {
    return (
      <View style={{ color: "green", fontSize: 30 }}>
        <Text style={{ fontSize: 26 }}>
          Parent Class Count: {this.state.count}
        </Text>
        {/* child class in same file of parent */}
        <DisplayInfoClass count={this.state.count} title="In file Class" />
        {/* child class in differnt file of parent */}
        <MyChildClass count={this.state.count} title="Child Class" />

        {/* child function in different file */}
        <MyChildFunction count={this.state.count} title="Child Function" />

        <Button onPress={this.incrementCount} title="Click" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyClass;
