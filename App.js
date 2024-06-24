import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Card} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row'}}>
      <Image source={require('./assets/Ellipse.png')} 
      style={styles.prof_pic}/>
      <View style={{marginTop: 60, marginLeft: 20}}>
      <Text style={{fontSize: 20}}>Welcome back</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 26}}>Eric Atsu</Text>
      </View>
      </View>
<View style={{height: 30}}/>
      <Card style={styles.card} />
      <View style={{height: 20}}/>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <View>
      <Feather name="arrow-up-circle" size={40} color="black" />
      <Text>Sent</Text>
      </View>
      <View>
      <Feather name="arrow-down-circle" size={40} color="black" />
      <Text>Received</Text>
      </View>
      <View>
      <Feather name="dollar-sign" size={40} color="black" />
      <Text>Loan</Text>
      </View>
      <View>
      <Feather name="upload-cloud" size={40} color="black" />
      <Text>Top UP</Text>
      </View>
      </View>

      <View style={{height: 10}}/>
      <View style={{flexDirection: 'row'}}>
<Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Transaction</Text>
<Text style={{color:'#0000FF', marginLeft: 210}}>See all</Text>
      </View>
      <View style={styles.bottomBar}>
      <View>
    <Feather name="home" size={40} color="black" />
    <Text>Home</Text>
    </View>
    <View>
    <Feather name="credit-card" size={40} color="black" />
    <Text>My Cards</Text>
    </View>
    <View>
    <Feather name="pie-chart" size={40} color="black" />
    <Text>Statistics</Text>
    </View>
    <View>
    <Feather name="settings" size={40} color="black" />
    <Text>Settings</Text>
   </View>
    </View>
    </SafeAreaView>
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
  marginTop: 50,
  marginLeft: 20,
  },

  card: {
    height:300,
    width: '90%',
    backgroundColor: '#040008',
    borderRadius: 40,
    marginLeft: 15,
    transparency: "80%"
  },
  bottomBar: {
    flexDirection: 'row',
   justifyContent: 'space-around',
   bottom: 0,
   position: 'absolute',
   height: 60,
   width: '100%',
   
  },

});
