import React from 'react'
import { Image as MotiImage } from "moti"
import { StyleSheet } from 'react-native'


const Grain = () =>
    <MotiImage
        from={{
            rotate: 0
        }}
        animate={{
            rotate: 90,
        }}
        transition={{
            loop: true,
            type: 'timing',
            duration: 200,
            delay: 100,
            repeatReverse: true
        }}
        style={[styles.grain]}
        source={{
            uri: 'https://cdn.discordapp.com/attachments/940382767550697513/945049587062804500/Untitled-1-Recovered.png',
        }}
    />

const styles = StyleSheet.create({
    grain: {
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        opacity: 0.8,
    }
})

export default Grain