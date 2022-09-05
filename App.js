import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Block } from 'galio-framework';

export default function App() {
  return (
      <Block flex style={styles.container}>
          <Block flex={2} middle style={styles.row1} ></Block>
              <Block width={40} height={40} style={styles.row1e1}></Block>
          <Block flex style={styles.row2} >
              <Block width={40} height={40} style={styles.row2p1}></Block>
          </Block>
          <Block flex={3} style={styles.row3} ></Block>
      </Block>
  );
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#F94144'
    },
    row1:{
      backgroundColor: '#F3722C'
    },
    row2:{
      backgroundColor: '#90BE6D'
    },
    row3: {
      backgroundColor: '#277DA1'
    },
    row1e1: {
      backgroundColor: '#577590 '
    }

});
