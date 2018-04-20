import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import StartScreen from "./components/startscreen";
import LogIn from "./components/login";
import NewUser from "./components/newUser";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        backgroundColor="blue"
        barStyle="dark-content"
        hidden={false}
        />
        {/* <StartScreen /> */}
        {/* <LogIn /> */}
        <NewUser />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
