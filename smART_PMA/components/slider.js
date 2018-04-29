import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View,
    StatusBar
} from 'react-native';
import Swiper from "react-native-deck-swiper";
// import apiCall from "./api"


export default class SliderImages extends Component {
    // componentDidMount (){
    //     fetch("https://hackathon.philamuseum.org/api/v0/collection/object?query=34120&api_token=8dP6ovY0qpRjI7v4Ljs23RykaOWWzbT15i8kPr2in3bPwgNadjK06287MjUa")
    //     .then((response) => response.json())
    //     .then((response) => {
    //         console.log(response.Image);
    //         this.setState({
    //             cards: response.Image
    //         });
    //     });
    // };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            cards: [""],
            swipedAllCards: false,
            swipeDirection: "",
            isSwipingBack: false,
            cardIndex: 0
        }
    }

    componentWillMount() {
        fetch("https://hackathon.philamuseum.org/api/v0/collection/object?query=34120&api_token=8dP6ovY0qpRjI7v4Ljs23RykaOWWzbT15i8kPr2in3bPwgNadjK06287MjUa")
            .then((response) => response.json())
            .then((response) => {
                console.log(response.Image);
                this.setState({
                    cards: [response.Image]
                });
            });
    };

    renderCard = card => {
        return (
            <View style={styles.card}>
                <Image source={{ uri: card }}
                    style={{ flex: 1, alignContent: 'center' }}
                />
            </View>
        )
    };

    onSwipedAllCards = () => {
        this.setState({
            swipedAllCards: true
        })
    };

    swipeBack = () => {
        if (!this.state.isSwipingBack) {
            this.setIsSwipingBack(true, () => {
                this.swiper.swipeBack(() => {
                    this.setIsSwipingBack(false)
                })
            })
        }
    };

    setIsSwipingBack = (isSwipingBack, cb) => {
        this.setState(
            {
                isSwipingBack: isSwipingBack
            },
            cb
        )
    };

    swipeLeft = () => {
        this.swiper.swipeLeft()
    };


    render() {
        console.log("Cards", this.state.cards);
        return (
            <View style={styles.container}>
                <Swiper
                    ref={swiper => {
                        this.swiper = swiper
                    }}
                    onSwiped={this.onSwiped}
                    cards={this.state.cards}
                    cardIndex={this.state.cardIndex}
                    cardVerticalMargin={80}
                    renderCard={this.renderCard}
                    onSwipedAll={this.onSwipedAllCards}
                    stackSize={1}
                    stackSeparation={15}>
                </Swiper>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
    },
    done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
    }
})

