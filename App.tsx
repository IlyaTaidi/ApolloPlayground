import { MotiView } from 'moti'
import React from 'react'
import { StyleSheet } from 'react-native'
import Cursor from './Cursor';
import Grain from './components/grain';

//prevent the right click menu from appearing and 
//capture the position to later render a custom menu
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const xPos = event.pageX + "px";
  const yPos = event.pageY + "px";
})

//Call the cursor function from cursor.js
/* export default function cursor() {
  return(
    <Cursor />
  )
}
 */
export default function App() {
  return (
    <MotiView style={styles.container}>
      <Grain />
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
