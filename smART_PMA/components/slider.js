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

let objectArr = ["34120", "49639", "55686", "72177", "82476", "94025", "95643", "101687", "102943", "102969", "103024", "184827", "284198"];
let objectImages = [];


export default class SliderImages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            cards: [],
            swipedAllCards: false,
            swipeDirection: "",
            isSwipingBack: false,
            cardIndex: 0
        }
    }




    componentWillMount() {
        let objectImages = [];
        let objectArr = ["34120", "49639", "55686", "72177", "82476", "94025", "95643", "101687", "102943", "102969", "103024", "184827", "284198"];
        let check = 0;

        function getImages (){
            console.log(objectArr);
            console.log("Images: " + objectImages);
            console.log("Check: " + check);
            // console.log("Images: " + objectImages);
            if (check < objectArr.length) {
                fetch("https://hackathon.philamuseum.org/api/v0/collection/object?query=" + objectArr[check] + "&api_token=8dP6ovY0qpRjI7v4Ljs23RykaOWWzbT15i8kPr2in3bPwgNadjK06287MjUa")
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        objectImages.push(data.Image);
                        check++;
                        getImages();
                    })
            }
            else {
                this.setState({
                    cards: objectImages
                });
            };
        };

        getImages();

        //     fetch("https://hackathon.philamuseum.org/api/v0/collection/object?query=" + objectArr[check] + "&api_token=8dP6ovY0qpRjI7v4Ljs23RykaOWWzbT15i8kPr2in3bPwgNadjK06287MjUa")
        //         .then((response) => response.json())
        //         .then((data) => {
        //             // let image = data.Image;
        //             // objectImages.push(image);
        //             // console.log(data);
        //             // var objectImages = [];
        //             // let newArr = this.state.cards.slice();
        //             // newArr.push(data.Image);

        //             // this.setState(state => ({...state, cards: state.cards.concat(data.Image)}))
        //             // let images = Array.from(this.state.cards);
        //             // cards = objectImages;

        //             // this.setState({cards: image})
        //             console.log("Images: " + data.Image);
        //             this.setState(prevState => ({
        //                 cards: [...prevState.cards, data.Image]
        //             }))
        //         });

        //     check++
        //     if (check < objectArr.length) {
        //         getImages();
        //     };
        // }

        // getImages();


        //     for (let i = 0; i < objectArr.length; i++) {
        //         fetch("https://hackathon.philamuseum.org/api/v0/collection/object?query=" + objectArr[i] + "&api_token=8dP6ovY0qpRjI7v4Ljs23RykaOWWzbT15i8kPr2in3bPwgNadjK06287MjUa")
        //             .then((response) => response.json())
        //             .then((data) => {
        //                 let image = data.Image;
        //                 objectImages.push(image);
        //     //             // console.log(data);
        //     //             // var objectImages = [];
        //     //             // let newArr = this.state.cards.slice();
        //     //             // newArr.push(data.Image);

        //     //             // this.setState(state => ({...state, cards: state.cards.concat(data.Image)}))
        //     //             // let images = Array.from(this.state.cards);
        //     //             // cards = objectImages;

        //     //             // this.setState({cards: image})
        //     //             // this.setState(prevState => ({
        //     //             // cards: [...prevState.cards,  data.Image] 
        //     //             // }))
        //                 console.log("Images: " + data.Image);

        //             });

        //     // };
        //     console.log("Images: " + objectImages);
        //     // console.log(objectArr);
        //     this.setState({
        //         cards: objectImages
        //     });
        // };
    };

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("Images: " + objectImages);
    //     console.log(objectArr);
    //     this.setState({
    //         cards: objectImages
    //     });
    //     console.log("cards: ", this.state.cards);

    // }


    // fetch("https://hackathon.philamuseum.org/api/v0/collection/object/location?name=116&api_token=8dP6ovY0qpRjI7v4Ljs23RykaOWWzbT15i8kPr2in3bPwgNadjK06287MjUa")
    //     .then((response) => response.json())
    //     .then((response) => {
    //         console.log(response.ObjectIDs);
    //         objectId = response.ObjectIDs[4];
    //         fetch("https://hackathon.philamuseum.org/api/v0/collection/object?query=" + objectId + "&api_token=8dP6ovY0qpRjI7v4Ljs23RykaOWWzbT15i8kPr2in3bPwgNadjK06287MjUa")

    //             // fetch("https://hackathon.philamuseum.org/api/v0/collection/object?query=34120&api_token=8dP6ovY0qpRjI7v4Ljs23RykaOWWzbT15i8kPr2in3bPwgNadjK06287MjUa")
    //             .then((response) => response.json())
    //             .then((response) => {
    //                 console.log(response.Image);
    //                 this.setState({
    //                     cards: [response.Image]
    //                 });
    //             });
    //     })
    // for (var i=0; i<objectIds.length; i++) {
    //     var objectId = objectIds[i];

    // fetch("https://hackathon.philamuseum.org/api/v0/collection/object?query=" + objectId + "&api_token=8dP6ovY0qpRjI7v4Ljs23RykaOWWzbT15i8kPr2in3bPwgNadjK06287MjUa")

    //     // fetch("https://hackathon.philamuseum.org/api/v0/collection/object?query=34120&api_token=8dP6ovY0qpRjI7v4Ljs23RykaOWWzbT15i8kPr2in3bPwgNadjK06287MjUa")
    //     .then((response) => response.json())
    //     .then((response) => {
    //         console.log(response.Image);
    //         this.setState({
    //             cards: [response.Image]
    //         });
    //     });
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
                    stackSize={this.state.cards.length}
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

