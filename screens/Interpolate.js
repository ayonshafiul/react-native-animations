import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

const WORDS = ["Hello", "world", "from", "React", "Native"]


const { height, width } = Dimensions.get("window")

const SIZE = width * 0.7

export default function Interpolate() {
    const translateX = useSharedValue(0)
    const scrollHandler = useAnimatedScrollHandler((event) => {
        translateX.value = event.contentOffset.x;
    })

    return (
        <Animated.ScrollView style={s.scrollContainer} horizontal onScroll={scrollHandler} scrollEventThrottle={16} pagingEnabled>
            {WORDS.map((word, idx) => {
                return <Page key={idx.toString()} word={word} index={idx} translateX={translateX} />
            })}
        </Animated.ScrollView>
    )
}

const s = StyleSheet.create({
    pageContainer: {
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollContainer: {
        flex: 1
    },
    square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'purple',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 70,
        color: 'white'
    }
})




function Page({ word, index, translateX }) {



    const squareAnimated = useAnimatedStyle(() => {
        const scale = interpolate(translateX.value, [(index - 1) * width, index * width, (index + 1) * width], [0, 1, 0], Extrapolate.CLAMP)
        const radius = interpolate(translateX.value, [(index - 1) * width, index * width, (index + 1) * width], [0, SIZE / 2, 0], Extrapolate.CLAMP)
        return {
            transform: [{ scale }],
            borderRadius: radius
        }
    })

    return (
        <View style={[s.pageContainer, { backgroundColor: `rgba(0,0,255,0.${index})` }]}>
            <Animated.View style={[s.square, squareAnimated]}>
                <Animated.View>
                    <Text style={s.text}>{word}</Text>
                </Animated.View>
            </Animated.View>
        </View>
    )
}