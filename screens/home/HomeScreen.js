import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {

  const nav = useNavigation()

    return (
      <View>

      <TouchableOpacity style={styles.loginlink}>
      <Text  onPress={() => nav.navigate('loginscreen')}>Login</Text>
      <Text>Registrera mig</Text>
      <Text>Boka tid</Text>
      </TouchableOpacity>
      <ImageBackground 
      source={require('/Users/Momo/aex/aex/screens/home/cleaning.jpg')}
      style={styles.imagebackground}
      >

      <View style={styles.container}>

        <Text style={styles.homeHeader}>Städa fint Ab</Text>
        <Text style={styles.homebody}>Välkommen till oss.</Text>
        <Text style={styles.homebody1}>Här kan du som kund boka och avboka städningar, lämna feedback p genomförda städningar samt få en överblick över dina sidor</Text>


      </View>
      </ImageBackground>
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    homeHeader: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#00008b'
    },
    homebody: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 20,
    },
    homebody1: {
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 20,
  },
  loginlink:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderColor : '#00008b',
    borderRadius: 5,
    paddingTop: 25,
    width: '100%',
  },
    imagebackground:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
  },
  });
  