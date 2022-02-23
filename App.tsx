import { MotiView } from 'moti';
import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import Grain from './components/grain';
import Ripple from './components/floatingButton';
import Cursor from './components/cursor';
import Stars from './components/stars';
import Backdrop from './components/backdrop';

//prevent the right click menu from appearing and 
//capture the position to later render a custom menu

// Commenting out for now while we develop //
/* document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const xPos = event.pageX + "px";
  const yPos = event.pageY + "px";
}) */

export default function App() {
  return (
    <MotiView style={styles.container}>
      {<Grain />}
      {<Ripple />}
      {<Cursor />}
      <Stars></Stars>
      <backdrop></backdrop>
    </MotiView>
  )
}


const styles = StyleSheet.create({
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
