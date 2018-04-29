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

let imagesArr = [];

// function getImages() {
//     return fetch("https://hackathon.philamuseum.org/api/v0/collection/object?query=34120&api_token=8dP6ovY0qpRjI7v4Ljs23RykaOWWzbT15i8kPr2in3bPwgNadjK06287MjUa")
//         .then((response) => response.json())
//         .then((responseJson) => {
//             var image = responseJson.Image;
//             this.state.cards.push(image);
//         })
// }

export default class SliderImages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            imageCards: [],
            cards: "",
            // cards: ["https://philamuseum.org/images/cad/zoomers/2007-65-3-pma-CX.jpg", "http://philamuseum.org/images/cad/zoomers/1985-52-36589-mccrindle.jpg", "http://philamuseum.org/images/cad/zoomers/1956-118-1-CX.jpg"],
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
                // let image = response.Image;
                // for (var i=0; i<response.length; i++) {
                this.setState({
                    imageCards: response,
                    cards: response.Image
                });

                // imagesArr.push(response.Image);
                // }  
            });
    };


    // componentWillMount (){
    //         return fetch("https://hackathon.philamuseum.org/api/v0/collection/object?query=34120&api_token=8dP6ovY0qpRjI7v4Ljs23RykaOWWzbT15i8kPr2in3bPwgNadjK06287MjUa")
    //             .then((response) => response.json())
    //             .then((responseJson) => {
    //                 this.setState({
    //                     isLoading: false,
    //                     dataSource:responseJson.Image
    //                 }, function (){
    //                     for (var i=0; i<responseJson.lenghth; i++) {
    //                         imagesArr.push(responseJson[i].Image);
    //                     }
    //                     // var image = responseJson.Image;
    //                     // this.state.cards.push(image);    
    //                 });   
    //             })
    //             .catch((error) => {
    //                 console.error(error);
    //             });
    // };

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
        return (
            <View style={styles.container}>
                <Swiper
                    ref={swiper => {
                        this.swiper = swiper
                    }}
                    onSwiped={this.onSwiped}
                    // onTapCard={this.swipeLeft}
                    cards={this.state.cards.Image}
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

