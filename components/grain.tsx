import React from 'react'
import { Image as MotiImage } from "moti"
import { StyleSheet } from 'react-native'


const Grain = () =>
    <MotiImage
        style={styles.grain}
        source={{
            uri: 'https://cdn.discordapp.com/attachments/940382767550697513/946162216619634728/GrainTestInverted.gif',
        }}
    />

const styles = StyleSheet.create({
    grain: {
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        opacity: 0.05,
    }
})

export default Grain