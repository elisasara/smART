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
// import Swipeout from "react-native-swipeout";

// const swipeoutBtns = [
//     {
//         text: "Button"
//     }
// ];

var image = "http://philamuseum.org/images/cad/zoomers/2007-65-3-pma-CX.jpg";

export default class SliderImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // cards: ["Card 1", "Card 2", "Card 3"],
            // cards: [image],
            cards: ["https://philamuseum.org/images/cad/zoomers/2007-65-3-pma-CX.jpg"],
            // , "http://philamuseum.org/images/cad/zoomers/1985-52-36589-mccrindle.jpg", "http://philamuseum.org/images/cad/zoomers/1956-118-1-CX.jpg"],
            swipedAllCards: false,
            swipeDirection: "",
            isSwipingBack: false,
            cardIndex: 0
        }
    }

    renderCard = card => {
        return (
            <View style={styles.card}>
            {/* <Image source={{uri: {card}}}
            style={{ height: 200, width: 200 }}
            /> */}
                <Image
                    style={{ height: 200, width: 200 }}
                    source={{ uri: {card} }}
                // source={require("../images/testImage.jpeg")}
                />

                {/* <Text style={styles.text}>{card}</Text> */}
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
        return (
            <View style={styles.container}>
                <Swiper
                    ref={swiper => {
                        this.swiper = swiper
                    }}
                    onSwiped={this.onSwiped}
                    onTapCard={this.swipeLeft}
                    cards={this.state.cards}
                    cardIndex={this.state.cardIndex}
                    cardVerticalMargin={80}
                    renderCard={this.renderCard}
                    onSwipedAll={this.onSwipedAllCards}
                    stackSize={3}
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

