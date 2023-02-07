import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import React, { useRef } from 'react'
import { TapGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring } from 'react-native-reanimated'

const SIZE = Dimensions.get("window").width

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function DoubleTap() {
    const doubleTapRef = useRef()
    const scale = useSharedValue(0);


    const doubleTapHandler = () => {
        scale.value = withDelay(500, withSpring(1, {
            mass: 0.3
        }, (isFinished) => {
            if (isFinished) scale.value = withSpring(0)
        }))
    }

    const animatedImage = useAnimatedStyle(() => {
        return {
            transform: [{ scale: Math.max(0, scale.value) }]
        }
    })
    return (
        <View style={s.container}>
            <TapGestureHandler
                waitFor={doubleTapRef}
                onActivated={() => {
                    console.log("Single Tap")
                }}>
                <TapGestureHandler
                    ref={doubleTapRef}
                    maxDelayMs={250}
                    numberOfTaps={2}
                    onActivated={doubleTapHandler}>
                    <Animated.View style={s.container}>
                        <ImageBackground source={require('../assets/post-image.jpg')} style={s.image}>
                            <AnimatedImage source={require('../assets/like.png')} resizeMode='center' style={[s.image, animatedImage]} />
                        </ImageBackground>
                    </Animated.View>
                </TapGestureHandler>
            </TapGestureHandler>
        </View>
    )
}

const s = StyleSheet.create({
    image: {
        width: SIZE,
        height: SIZE
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})