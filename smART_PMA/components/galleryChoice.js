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
                        fetch("https://hackathon.philamuseum.org/api/v0/collection/object/location?name=116&api_token=8dP6ovY0qpRjI7v4Ljs23RykaOWWzbT15i8kPr2in3bPwgNadjK06287MjUa")
                            .then((response) => response.json())
                            .then((response) => {
                                console.log(response.ObjectIDs);
                                this.props.navigation.navigate("Discover", {objectIds: response.objectIDs});
                            })
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
