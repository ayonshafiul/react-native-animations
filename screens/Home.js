import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'

export default function Home() {
    const scale = useSharedValue(0)

    const calculateRotation = (value) => {
        'worklet';
        return `${value * 2 * Math.PI}rad`
    }
    const scalingView = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }, { rotate: calculateRotation(scale.value) }]
        }
    }, [])

    useEffect(() => {
        scale.value = withRepeat(withTiming(1), -1, true);
        console.log("Hello")
    }, [])
    return (
        <View style={s.container}>
            <Animated.View style={[s.box, scalingView]}>

            </Animated.View>
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
        width: 200,
        height: 200,
        backgroundColor: 'purple',
        borderRadius: 8
    }
})