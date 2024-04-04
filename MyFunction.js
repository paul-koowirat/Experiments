import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MyChildFunction from "./MyChildFunction";
import MyChildClass from "./MyChildClass";

// 1.Test function in same file and use arrow function
const DisplayInfo1 = (props) => {
  return (
    <View>
      <Text style={{ color: "black", fontSize: 20 }}>
        {props.title} Count : {props.count}
      </Text>
    </View>
  ); // export is not required due to it is in same file
};

// 2.This function use return directly without curely bracket
const DisplayInfo2 = (props) => (
  <View>
    <Text style={{ color: "black", fontSize: 20 }}>
      {props.title} Count : {props.count}
    </Text>
  </View>
);
// 3.use function definition instead of arrow function
function DisplayInfo3(props) {
  return (
    <View>
      <Text style={{ color: "black", fontSize: 20 }}>
        {props.title} Count : {props.count}
      </Text>
    </View>
  );
}

function MyFunction() {
  const [count, setCount] = useState(5);
  const [title, setTitle] = useState("");

  const incrementCount = () => {
    //console.log("Function Count");
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26, color: "red" }}>
        Main Function Count: {count}
      </Text>
      {/*Internal Functions*/}
      <DisplayInfo1 count={count} title="Internal Function 1" />
      <DisplayInfo2 count={count} title="Internal Function 2" />
      <DisplayInfo3 count={count} title="Internal Function 3" />

      {/*External Function*/}
      <MyChildFunction count={count} title="Child Function" />

      {/*External Class*/}
      <MyChildClass count={count} title="Child Class" />

      <Button onPress={incrementCount} title="Click" />
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

export default MyFunction;
