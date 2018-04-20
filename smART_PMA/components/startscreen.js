import React, { Component } from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class StartScreen extends Component {
    render() {
        return (
            <View>
                <Button
                    onPress={() => {
                        alert("You clicked Log In");
                    }}
                    title="Log In"
                />
                <Button
                    onPress={() => {
                        alert("You clicked Create an Account");
                    }}
                    title="Create an Account"
                />
                <Button
                    onPress={() => {
                        alert("You clicked Discover");
                    }}
                    title="DISCOVER"
                />
                <Button
                    onPress={() => {
                        alert("You clicked Pick a Gallery");
                    }}
                    title="Pick a Gallery"
                    style={styles.button}
                />
            </View>
        );
    }
}

