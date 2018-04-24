import React, { Component } from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class GalleryChoice extends Component {
    render() {
        return (
            <View>
                <Button
                    onPress={() => {
                        this.props.navigation.navigate("Discover");
                    }}
                    title="Gallery 1"
                />
                <Button
                    onPress={() => {
                        this.props.navigation.navigate("Discover");
                    }}
                    title="Gallery 2"
                />
                <Button
                    onPress={() => {
                        this.props.navigation.navigate("Discover");
                    }}
                    title="Gallery 3"
                />
                <Button
                    onPress={() => {
                        this.props.navigation.navigate("Discover");
                    }}
                    title="Gallery 4"
                />
                <Button
                    onPress={() => {
                        this.props.navigation.navigate("Discover");
                    }}
                    title="Gallery 5"
                />
            </View>
        );
    }
}
