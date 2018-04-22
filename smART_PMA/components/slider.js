import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View,
    StatusBar
} from 'react-native';
import {
    Swipeout,
    createResponder
} from "react-native-swipeout";

const swipeoutBtns = [
    {
        text: "Button",
        text: "Button 2"
    }
]

const images = ["http://philamuseum.org/images/cad/zoomers/2007-65-3-pma-CX.jpg", "http://philamuseum.org/images/cad/zoomers/1985-52-36589-mccrindle.jpg", "http://philamuseum.org/images/cad/zoomers/1956-118-1-CX.jpg"];

export default class SliderImages extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         gestureState: {}
    //     }
    // }

    // componentWillMount() {
    //     this.gestureResponder = createResponder({
    //         onStartShouldSetResponder: (evt, gestureState) => true,
    //         onStartShouldSetResponderCapture: (evt, gestureState) => true,
    //         onMoveShouldSetResponder: (evt, gestureState) => true,
    //         onMoveShouldSetResponderCapture: (evt, gestureState) => true,
    //         onResponderGrant: (evt, gestureState) => { },
    //         onResponderTerminationRequest: (evt, gestureState) => true,
    //         onResponderMove: (evt, gestureState) => { },
    //         onResponderRelease: (evt, gestureState) => {
    //           this.setState({
    //             gestureState: {
    //               ...gestureState
    //             }
    //           })
    //         },
    //         onResponderTerminate: (evt, gestureState) => {

    //         },
    //     })
    // }

    render() {
        return (
            <Swipeout right={swipeoutBtns} left={swipeoutBtns}>
                <View>
                    <Image
                        source={require("../images/testImage.jpeg")}
                        style={{ width: 200, height: 200 }}
                    />
                </View>
            </Swipeout>
        )
    }
};

