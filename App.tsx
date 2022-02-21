import { MotiView } from 'moti'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image as MotiImage } from "moti"
import Cursor from './Cursor';

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
//prevent the right click menu from appearing and 
//capture the position to later render a custom menu
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const xPos = event.pageX + "px";
  const yPos = event.pageY + "px";
})
//Call the cursor function from cursor.js
export default function cursor() {
  return(
    <Cursor />
  )
}

export function Loop() {
  return (
    <MotiView style={styles.container}>
      <Grain />
    </MotiView>
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
