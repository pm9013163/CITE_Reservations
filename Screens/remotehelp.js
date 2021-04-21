import React, {useState} from 'react';
import { Formik } from 'formik';
import { Button, View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { globalStyles } from '../Styles/global.js';
import * as yup from 'yup';

const ReviewSchema = yup.object({
  name: yup.string()
    .required('* Full name is required')
    .min(4, '* Full name is required'),
    
  desc: yup.string()
    .min(4, '* Description is required')
    .required('* Description is required'),
    
  phone: yup.string()
    .min(9, '* Ex. 5201234567 ')
    .required('* Ex. 5201234567 '),
  email: yup.string()
    .min(6, ' * Ex. help@citetucson.com')
    .required(' * Ex. help@citetucson.com'),
  })

function remoteHelp({ navigation }) {

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
  
  return (
          <View style={globalStyles.container}>
        <Formik
            initialValues={{ desc: '', name: '', phone: '', email: ''}}
            validationSchema={ReviewSchema}
          onSubmit={(values) => {
            sendData(values), navigation.navigate('Confirmation2')
          }}
        >
          {props => (
            <KeyboardAvoidingView
            style={styles.container17}
            behavior="padding"
            keyboardVerticalOffset={64}
          >
            <ScrollView >
              <TextInput
                style={styles.input}
                multiline
                placeholder='First and Last Name'
                onChangeText={props.handleChange('name')}
                value={props.values.name}
                onBlur={props.handleBlur('name')}
              />
              <Text style={globalStyles.errorText}>
           {props.touched.name && props.errors.name }
          </Text>

              <TextInput
                style={styles.input}
                placeholder='Phone Number'
                onChangeText={props.handleChange('phone')}
                value={props.values.phone}
                onBlur={props.handleBlur('phone')}
                keyboardType='numeric'
              />
              <Text style={globalStyles.errorText}>
           {props.touched.phone && props.errors.phone }
          </Text>
              <TextInput
                              style={styles.input}
                              placeholder='Email Address'
                              onChangeText={props.handleChange('email')}
                              onBlur={props.handleBlur('email')}
                              value={props.values.email}
              />
              <Text style={globalStyles.errorText}>
           {props.touched.email && props.errors.email }
          </Text>
              <TextInput
                 style={styles.input2}
                 placeholder='Quick Description'
                 onChangeText={props.handleChange('desc')}
                 value={props.values.desc}
                 onBlur={props.handleBlur('desc')}
                 multiline
               />
               <Text style={globalStyles.errorText}>
           {props.touched.desc && props.errors.desc }
          </Text>
               <Button
                   title="Usually 15 minute response time"
               />
                     
              <TouchableOpacity
                     style={styles.button}
                   onPress={() => props.handleSubmit()}
                   >
                     <Text style={{color: 'black', fontWeight:'bold', fontSize: 20}}>Submit</Text>
              </TouchableOpacity>
              <View style={{ height: 50 }} />
              </ScrollView>
              </KeyboardAvoidingView>
          )}
        </Formik>
      </View>
      
      );
}

const styles = StyleSheet.create({
  container: {
    color: 'white',
    height: 50,
    width: 50,
    marginTop: 25,
   marginLeft: 75
  },
  container2: {
    color: 'white',
    height: 50,
    width: 50,
    marginTop: -50,
   marginLeft: 150
  },
  container3: {
    color: 'white',
    height: 50,
    width: 75,
    marginTop: -50,
   marginLeft: 220
  },
  container4: {
     color: 'white',
     height: 50,
     width: 50,
     marginTop: 150,
    marginLeft: 75
   },
  container5: {
    color: 'white',
    height: 50,
    width: 50,
    marginTop: -50,
   marginLeft: 150
  },
  container6: {
    color: 'white',
    height: 50,
    width: 50,
    marginTop: -50,
    marginLeft: 220
  },
  input: {
    borderWidth: 1,
    borderColor: '#1e8fff',
    padding: 15,
    fontSize: 18,
    borderRadius: 6,
    margin: 5,
    marginTop: 20
  },
  input2: {
    borderWidth: 1,
    borderColor: '#1e8fff',
    padding: 15,
    fontSize: 18,
    borderRadius: 6,
    height: 100,
    margin: 5,
    marginTop: 20
  },
  button: {
    shadowColor: 'rgba(0, 0, 0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 5, //IOS
    backgroundColor: '#039dfc',
    elevation: 2, // Android
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  marginTop: 50,
  marginLeft: 75
  }
});

export {remoteHelp};
