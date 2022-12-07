import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='homescreen' component={HomeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

