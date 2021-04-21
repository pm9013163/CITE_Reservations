import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking, TextInput, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import Unorderedlist from 'react-native-unordered-list';
import { globalStyles } from '../Styles/global.js';
import * as yup from 'yup';

const URL = "https://www.yelp.com/biz/cite-technology-tucson"

const ReviewSchema = yup.object({
  apptNum: yup.string()
  .required('* Appointment Number from Confirmation Email. Check Spam?')
  .min(5,'* Appointment Number from Confirmation Email. Check Spam?'),
  })

function goYelp(){
  Linking.openURL(URL).catch((err) => console.error('An error occurred', err));
}

async function sendData(data) {
  try {
    await fetch('https://webhook.site/84e301ca-305b-4308-8a15-41a0e3407b3b', {
    method: 'post',
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    data
    })
    });
  } catch(e) {
    navigation.navigate('CITE Techs');
    console.log(e);
    Alert.alert(
      "Unable to Submit",
      "Please check your WiFi connection and try again.",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../img/logo.png')} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home Appointment')}
          >
            <Text style={{fontWeight:"bold", fontSize:20}}>Home Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Remote Help')}
          >
            <Text style={{fontWeight:"bold", fontSize:20}}>Remote Help</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Services')}
          >
            <Text style={{fontWeight:"bold", fontSize:20}}>Services</Text>
          </TouchableOpacity>
    </View>
  )
}

function DetailsScreen({navigation}) {
    return (
          <Formik
              initialValues={{ apptNum: ''}}
              validationSchema={ReviewSchema}
            onSubmit={(values) => {
              sendData(values), navigation.navigate('CITE Techs')
            }}
          >
            {props => (
              <KeyboardAvoidingView
              style={styles.container2}
              behavior="padding"
              keyboardVerticalOffset={75}
              contentContainerStyle={{flex: 1}}
            >
              <ScrollView >
            <TouchableOpacity
            onPress={() => goYelp()}
            >
        <Image source={require('../img/fuoy.png')} style={styles.image} />
        </TouchableOpacity>
        <Text style={{alignItems: "flex-start", marginTop:-50,
      fontWeight: 'bold', fontSize: 20, marginLeft: 75}}>Home Appointments</Text>
      <Unorderedlist style={{marginLeft: 100, marginTop: 10}}><Text style={{marginTop:10}}>Techs come to you</Text></Unorderedlist>
      <Unorderedlist style={{marginLeft: 100, marginTop: 10}}><Text style={{marginTop:10}}>Not Fixed? No Charge</Text></Unorderedlist>
      <Unorderedlist style={{marginLeft: 100, marginTop: 10}}><Text style={{marginTop:10}}>$55/hr, minimum 1 hour</Text></Unorderedlist>
      <Text style={{alignItems: "flex-start", marginTop:25,
      fontWeight: 'bold', fontSize: 20, marginLeft: 75}}>Remote Appointments</Text>
      <Unorderedlist style={{marginLeft: 100, marginTop: 10}}><Text style={{marginTop:10}}>Techs connect remotely</Text></Unorderedlist>
      <Unorderedlist style={{marginLeft: 100, marginTop: 10}}><Text style={{marginTop:10}}>Not Fixed? No Charge</Text></Unorderedlist>
      <Unorderedlist style={{marginLeft: 100, marginTop: 10}}><Text style={{marginTop:10}}>$25/hr, minimum 1 hour</Text></Unorderedlist>
      <Text style={{alignItems: "flex-start", marginTop:25,
      fontWeight: 'bold', fontSize: 20, marginLeft: 75}}>Cancel an Appointment</Text>
      <TextInput
                  style={styles.input}
                  placeholder='Appointment Number'
                  onChangeText={props.handleChange('apptNum')}
                  value={props.values.apptNum}
                  onBlur={props.handleBlur('apptNum')}
                  keyboardType='numeric'
                />
                <Text style={globalStyles.errorText}>
            {props.touched.apptNum && props.errors.apptNum }
            </Text>
            <TouchableOpacity
                     style={styles.button2}
                   onPress={() => props.handleSubmit()}
                   >
                     <Text style={{color: 'black', fontWeight:'bold', fontSize: 20}}>Cancel Appt</Text>
              </TouchableOpacity>
              <View style={{ height: 50 }} />
              </ScrollView>
              </KeyboardAvoidingView>
            )}
          </Formik>
      );
  }

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#1e8fff',
    padding: 15,
    fontSize: 18,
    borderRadius: 6,
    margin: 5,
    marginTop: 20,
    marginHorizontal: 15,
  },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: "center",
      padding: 60,
    },
  button: {
    shadowColor: 'rgba(30,144,255, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    height: 75,
    width: 225,
    marginLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button2: {
    shadowColor: 'rgba(30,144,255, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#d11608',
    elevation: 2, // Android
    height: 50,
    width: 200,
    marginLeft: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    width: 425,
    height: 325,
    resizeMode: 'contain',
    alignItems: 'center',
    marginTop: -100
},
scrollView: {
  backgroundColor: 'white',
  flex:1
},
container2: {
flex:1,
paddingTop: 0,
paddingHorizontal:0,
}
});

export {HomeScreen, DetailsScreen};
