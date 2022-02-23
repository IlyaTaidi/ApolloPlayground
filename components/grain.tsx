import React from 'react'
import { Image as MotiImage } from "moti"
import { StyleSheet } from 'react-native'


const Grain = () =>
    <MotiImage
        style={styles.grain}
        source={{
            uri: 'https://cdn.discordapp.com/attachments/941406533567254629/945629536521965568/GIFNoise.gif',
        }}
    />

const styles = StyleSheet.create({
    grain: {
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        opacity: 0.2,
    }
})

export default Grain