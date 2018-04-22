import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar
} from 'react-native';

const images = ["http://philamuseum.org/images/cad/zoomers/2007-65-3-pma-CX.jpg", "http://philamuseum.org/images/cad/zoomers/1985-52-36589-mccrindle.jpg", "http://philamuseum.org/images/cad/zoomers/1956-118-1-CX.jpg"];

export default class SliderImages extends Component {
    render() {
        return (
            <View>
                <Image
                    source={require("../images/testImage.jpeg")}
                    style={{width: 200, height: 200}}
                />
            </View>
        )
    }
}