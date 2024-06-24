import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Ellipse.png')} 
      style={styles.prof_pic}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  prof_pic: {
    width: 80,
    height: 80,
    borderRadius: 100,
  marginTop: 20,
  marginLeft: 20,
  }
});
