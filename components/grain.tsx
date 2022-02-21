import React from 'react'
import { Image as MotiImage } from "moti"
import { StyleSheet } from 'react-native'

function Grain() {
    return (
        <MotiImage
            from={{
                translateY: 1000,
            }}
            animate={{
                translateY: -1000,
            }}
            transition={{
                loop: true,
                type: 'timing',
                duration: 200,
                delay: 100,
                repeatReverse: false
            }}
            style={[styles.grain]}
            source={{
                uri: 'https://cdn.discordapp.com/attachments/940382767550697513/945049587062804500/Untitled-1-Recovered.png',
            }}
        />
    )
}
const styles = StyleSheet.create({
    grain: {
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        opacity: 0.8,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#000000',
        overflow: 'hidden',
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
})
