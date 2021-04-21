import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, Image, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen, DetailsScreen} from './Screens/home';
import {remoteHelp} from './Screens/remotehelp';
import HomeForm from './Screens/homeform';
import {Confirm} from './Screens/confirm';
import {Confirm2} from './Screens/confirm2';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CITE Techs">
        <Stack.Screen name="CITE Techs" component={HomeScreen} />
        <Stack.Screen name="Services" component={DetailsScreen} />
        <Stack.Screen name="Remote Help" component={remoteHelp} options={{
        headerRight: () => (
            <TouchableOpacity
              style={{alignItems: "center"}}
              onPress={() => {Alert.alert(
                "Help",
                "Scroll up or down between the boxes. Tap return or between boxes to dismiss keyboard. Other? help@citetucson.com",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );}}
              title="Info"
              color="#000000"
            >
            <Image style={{height:25, width:25, marginHorizontal: 15}} source={require('./img/info.png')} />
            </TouchableOpacity>
          )}}
          />
        <Stack.Screen name="Home Appointment" component={HomeForm} options={{
        headerRight: () => (
            <TouchableOpacity
              style={{alignItems: "center"}}
              onPress={() => {Alert.alert(
                "Help",
                "Scroll up or down between the boxes. Tap return or between boxes to dismiss keyboard. Other? help@citetucson.com",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );}}
              title="Info"
              color="#000000"
            >
            <Image style={{height:25, width:25, marginHorizontal: 15}} source={require('./img/info.png')} />
            </TouchableOpacity>
          )}}
          />
        <Stack.Screen name="Confirmation" component={Confirm} options={{
          headerLeft: null,
          gesturesEnabled: false,
        }}
 />
      <Stack.Screen name="Confirmation2" component={Confirm2} options={{
                headerLeft: null,
                gesturesEnabled: false,
                title: 'Confirmation'
              }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
