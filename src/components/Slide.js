import React from "react"
import { View, Text, Dimensions, StyleSheet } from "react-native"

const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = 0.61 * height;
const styles = StyleSheet.create({
    container: {
        width
    },
    titleContainer: {
        height: 100,
        justifyContent: "center"
    },
    title: {
        fontSize: 80,
        lineHeight: 80,
        color: "white",
        textAlign: "center",
        textTransform: "capitalize"
    }
})

const Slide = ({title, right}) => {
    const transform = [
        { translateY: (SLIDER_HEIGHT - 100) /2 },
        { translateX: right ? (width / 2 - 50) : (-width / 2 + 50)},
        { rotate: right ? "-90deg" : "90deg" }
    ]
    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

export default Slide;