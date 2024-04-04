import React from "react";
import { View, Text, Button } from "react-native";
import { Audio } from "expo-av";

class SoundPlayer extends React.Component {
  constructor(props) {
    super(props);
    //this.soundObject = new Audio.Sound();
  }
  soundExplosive1 = new Audio.Sound();
  soundExplosive2 = new Audio.Sound();
  async componentDidMount() {
    try {
      await this.soundExplosive1.loadAsync(require("./sound/explosions_1.mp3"));
      await this.soundExplosive2.loadAsync(require("./sound/explosions_2.mp3"));
    } catch (error) {
      console.log("Failed to load sound", error);
    }
  }

  componentWillUnmount() {
    this.soundExplosive1.unloadAsync();
    this.soundExplosive2.unloadAsync();
  }

  handlePlaySound1 = async () => {
    try {
      await this.soundExplosive1.setPositionAsync(0); // Reset sound position
      await this.soundExplosive1.playAsync();
    } catch (error) {
      console.log("Failed to play sound1", error);
    }
  };
  handlePlaySound2 = async () => {
    try {
      await this.soundExplosive2.setPositionAsync(1); // Reset sound position
      await this.soundExplosive2.playAsync();
    } catch (error) {
      console.log("Failed to play sound2", error);
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> Play Sound</Text>
        <Button title="Play Sound 1" onPress={this.handlePlaySound1} />
        <Button title="Play Sound 2" onPress={this.handlePlaySound2} />
      </View>
    );
  }
}

export default SoundPlayer;
