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
import GalleryChoice from "./components/galleryChoice";
import SliderImages from "./components/slider";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
      {/* <View style={styles.container}> */}
      <StatusBar
        backgroundColor="blue"
        barStyle="dark-content"
        hidden={false}
        />
        {/* <StartScreen /> */}
        {/* <LogIn /> */}
        {/* <NewUser /> */}
        {/* < GalleryChoice /> */}
        <SliderImages />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });
