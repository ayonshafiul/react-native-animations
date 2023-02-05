import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'

export default function PanGesture() {
    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)

    const panGestureEvent = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.translateX = translateX.value
            context.translateY = translateY.value
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.translateX
            translateY.value = event.translationY + context.translateY
        },
        onEnd: (event) => {
            translateX.value = withSpring(0)
            translateY.value = withSpring(0)
        },
    })

    const movableView = useAnimatedStyle(() => {
        return { transform: [{ translateX: translateX.value }, { translateY: translateY.value }] }
    }, [])
    return (
        <View style={s.container}>
            <PanGestureHandler onGestureEvent={panGestureEvent}>
                <Animated.View style={[s.box, movableView]}>

                </Animated.View>
            </PanGestureHandler>
        </View>

    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderRadius: 8
    }
})