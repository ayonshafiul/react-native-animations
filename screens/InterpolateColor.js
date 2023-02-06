import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'

const Colors = {
    light: {
        background: '#F8F8F8'
    },
    dark: {
        background: '#1F1F1F'
    }
}


export default function InterpolateColor() {
    const [theme, setTheme] = useState('light')
    const progress = useDerivedValue(() => {
        return theme == 'dark' ? withTiming(1) : withTiming(0);
    }, [theme])

    const animatedView = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(progress.value, [0, 1], [Colors.light.background, Colors.dark.background])

        return {
            backgroundColor
        }
    })

    const animatedText = useAnimatedStyle(() => {
        const color = interpolateColor(progress.value, [0, 1], [Colors.dark.background, Colors.light.background])

        return {
            color
        }
    })
    return (
        <Animated.View style={[s.container, animatedView]}>
            <Animated.Text style={[s.text, animatedText]}>Theme: {theme}</Animated.Text>
            <Switch value={theme == 'dark'} onValueChange={(toggled) => {
                setTheme(toggled ? "dark" : 'light')
            }}
                trackColor='violet'
                thumbColor='violet'
            />
        </Animated.View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontFamily: 'monospace',
        textTransform: 'uppercase',
        fontSize: 20
    }
})