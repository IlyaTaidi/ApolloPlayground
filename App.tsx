import { MotiView } from 'moti'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image as MotiImage } from "moti"

function Grain() {
  return (
    <MotiImage
      from={{
        translateY: 300,
      }}
      animate={{
        translateY: -550,
      }}
      transition={{
        loop: true,
        type: 'timing',
        duration: 130,
        delay: 0,
        repeatReverse: false
      }}
      style={[styles.grain]}
      source={{
        uri: 'https://cdn.discordapp.com/attachments/940382767550697513/945049587062804500/Untitled-1-Recovered.png',
      }}
    />
  )
}

export default function Loop() {
  return (
    <MotiView style={styles.container}>
      <Grain />
    </MotiView>
  )
}

const styles = StyleSheet.create({
  grain: {
    justifyContent: 'center',
    height: 3000,
    width: '100%',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    opacity: 0.1

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#efe6dd',
    overflow: 'hidden',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
})

/*const cursor = () {
  const dot = useRef(null);
  const dotOutline = useRef(null);

  return (
    <>
      <div ref={dotOutline} className='cursor-dot-outline'><</div>
      <div ref={dot} className="cursor-dot"><</div>
    </>

  )
}*/