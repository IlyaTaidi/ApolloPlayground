import { AnimatePresence } from 'framer-motion'
import React, { useReducer } from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { MotiView } from 'moti'

function Shape({ bg }: { bg: string }) {
    return (
        <MotiView
            from={{
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                scale: 0.9,
            }}
            style={[styles.shape, { borderColor: bg }]}
        />
    )
}

export default function ExitBeforeEnter() {
    const [visible, toggle] = useReducer((s) => !s, true)
    return (
        <Pressable onPress={toggle} style={styles.container}>
            <AnimatePresence exitBeforeEnter>
                {visible && <Shape bg="red" key="red" />}
                {!visible && <Shape bg="blue" key="blue" />}
            </AnimatePresence>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    shape: {
        justifyContent: 'center',
        height: 250,
        width: 250,
        borderRadius: 999,
        marginRight: 10,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 2
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#000000',
    },
})