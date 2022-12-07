import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';

export default function HomeScreen() {
    return (
      <ImageBackground 
      source={require('../home/cleaning.jpg')}
      resizeMode='cover'
      style={styles.imagebackground}
      >
      <View style={styles.container}>
        <Text style={styles.homeHeader}>Städa fint Ab</Text>
        <Text style={styles.homebody}>Välkommen till oss. Här kan du som kund boka och avboka städningar, lämna feedback på genomförda städningar och få en överblick över dina sidor.
        </Text>
      </View>
      </ImageBackground>
    );
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeHeader: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    homebody: {
        margin: 20,

    },
    imagebackground:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
  },
  });
  