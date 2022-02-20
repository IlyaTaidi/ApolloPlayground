import { AnimatePresence } from 'framer-motion'
import React, { useReducer } from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { MotiView } from 'moti'

function Shape() {
  return (
    <MotiView
      from={{
        translateY: -100,
      }}
      animate={{
        translateY: 0,
      }}
      transition={{
        loop: true,
        type: 'timing',
        duration: 1500,
        delay: 100,
      }}
      style={[styles.shape]}
    />
  )
}

export default function Loop() {
  return (
    <MotiView style={styles.container}>
      <Shape />
    </MotiView>
  )
}
{/* <img src="https://imagedelivery.net/jwHiTPdD9NSTNd6dIleh1A/c70cfd84-87de-4130-2495-60276086fa00/public"
  alt="" /> */}

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    borderRadius: 998,
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