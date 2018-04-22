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
                        alert("You clicked Gallery 1");
                    }}
                    title="Gallery 1"
                />
                <Button
                    onPress={() => {
                        alert("You clicked Gallery 2");
                    }}
                    title="Gallery 2"
                />
                <Button
                    onPress={() => {
                        alert("You clicked Gallery 3");
                    }}
                    title="Gallery 3"
                />
                <Button
                    onPress={() => {
                        alert("You clicked Gallery 4");
                    }}
                    title="Gallery 4"
                />
                <Button
                    onPress={() => {
                        alert("You clicked Gallery 5");
                    }}
                    title="Gallery 5"
                />
            </View>
        );
    }
}
