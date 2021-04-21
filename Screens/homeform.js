import React, {useState} from 'react';
import { View, StyleSheet, Button, TextInput, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { globalStyles } from '../Styles/global.js';
import { Formik } from 'formik';
import { Picker } from '@react-native-community/picker';
import * as yup from 'yup';

const ReviewSchema = yup.object({
name: yup.string()
  .required('* Full name is required')
  .min(4, '* Full name is required'),
  
homeAdd: yup.string()
  .min(4, '* Address is required')
  .required('* Address is required'),
  
phone: yup.string()
  .min(9, '* Ex. 5201234567 ')
  .required('* Ex. 5201234567 '),
email: yup.string()
  .min(6, ' * Ex. help@citetucson.com')
  .required(' * Ex. help@citetucson.com'),
month: yup.string()
  .required(' * Must select valid date, 9am - 5pm'),
day: yup.string()
  .required(' * Must select valid date, 9am - 5pm'),
year: yup.string()
  .required(' * Must select valid date, 9am - 5pm'),
hour: yup.string()
  .required(' * Must select valid date, 9am - 5pm'),
min: yup.string()
  .required(' * Must select valid date, 9am - 5pm'),
amPM: yup.string()
  .required(' * Must select valid date, 9am - 5pm')
})

export default function HomeForm({ navigation }) {

  const [secondModal, setSecondModal] = useState(false);
  
  const [modalOpen, setModalOpen] = useState(false);
  
  const [datePick, setDatePick] = useState("Jul");

  const [dayPick, setDayPick] = useState("7");
  
  const [year, setYear] = useState("2020");
  
  const [hour, setHour] = useState("10");
  
  const [min, setMin] = useState("30");
  
  const [amPM, setAMPM] = useState("AM");
  
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
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={globalStyles.container}
          keyboardShouldPersistTaps='handled'>
      <Formik
          initialValues={{ homeAdd: '', name: '', phone: '', month: '', day: '', year: '',
  hour: '', min:'', amPM:'', email: ''
                  }}
          validationSchema={ReviewSchema}
        onSubmit={(values) => {
          sendData(values), navigation.navigate('Confirmation')
        }}
      >
        {props => (
        <KeyboardAvoidingView
              style={styles.container17}
              behavior="padding"
              keyboardVerticalOffset={75}
            >
              <ScrollView >
                   <Modal visible={secondModal}>
                   <TouchableOpacity style={styles.button2}
                   onPress={() => setSecondModal(false)}
                   >
                   <Text style={{color: 'black', fontWeight:'bold'}}>Edit</Text>
                   </TouchableOpacity>
                   <Text style={styles.confirmation}>
                   <Text style={{ fontWeight: 'bold', fontSize: 20}}>Name: </Text> {props.values.name}</Text>
                   <Text style={styles.confirmation}>
                   <Text style={{ fontWeight: 'bold', fontSize: 20}}>Home Address: </Text>  {props.values.homeAdd}</Text>
                  <Text style={styles.confirmation}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20}}>Phone: </Text>{props.values.phone}</Text>
                  <Text style={styles.confirmation}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20}}>Email: </Text>{props.values.email}</Text>
                  <Text style={styles.confirmation}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Date: </Text>{props.values.month +' ' +props.values.day
                  + ', '+ props.values.year}</Text>
                  <Text style={styles.confirmation}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Time: </Text>{props.values.hour +':' +props.values.min+ ' '+ props.values.amPM}</Text>
                  <TouchableOpacity
                     style={styles.Donebutton2}
                     onPress={() => {props.handleSubmit(), setSecondModal(false)}}
                    >
                     <Text style={{color: 'white', fontWeight:'bold'}}>Submit</Text>
                   </TouchableOpacity>
                   </Modal>
                   
                   <Modal visible={modalOpen}>
                   <View >
                   <Picker
                     selectedValue={datePick}
                     style={styles.container}
                     onValueChange={(itemValue, itemIndex) =>
          setDatePick(itemValue)
                     }>
                     <Picker.Item label="Jan" value="Jan" />
                     <Picker.Item label="Feb" value="Feb" />
                   <Picker.Item label="Mar" value="Mar" />
                   <Picker.Item label="Apr" value="Apr" />
                   <Picker.Item label="May" value="May" />
                   <Picker.Item label="Jun" value="Jun" />
                   <Picker.Item label="Jul" value="Jul" />
                   <Picker.Item label="Aug" value="Aug" />
                   <Picker.Item label="Sep" value="Sep" />
                   <Picker.Item label="Oct" value="Oct" />
                   <Picker.Item label="Nov" value="Nov" />
                   <Picker.Item label="Dec" value="Dec" />
                   </Picker>
                   <Picker
                     selectedValue={dayPick}
                   style={styles.container2}
                     onValueChange={(itemValue, itemIndex) =>
                      setDayPick(itemValue)
                     }>
                     <Picker.Item label="1" value="1" />
                     <Picker.Item label="2" value="2" />
                   <Picker.Item label="3" value="3" />
                   <Picker.Item label="4" value="4" />
                   <Picker.Item label="5" value="5" />
                   <Picker.Item label="6" value="6" />
                   <Picker.Item label="7" value="7" />
                   <Picker.Item label="8" value="8" />
                   <Picker.Item label="9" value="9" />
                   <Picker.Item label="10" value="10" />
                   <Picker.Item label="11" value="11" />
                   <Picker.Item label="12" value="12" />
                   <Picker.Item label="13" value="13" />
                   <Picker.Item label="14" value="14" />
                   <Picker.Item label="15" value="15" />
                   <Picker.Item label="16" value="16" />
                   <Picker.Item label="17" value="17" />
                   <Picker.Item label="18" value="18" />
                   <Picker.Item label="19" value="19" />
                   <Picker.Item label="20" value="20" />
                   <Picker.Item label="21" value="21" />
                   <Picker.Item label="22" value="22" />
                   <Picker.Item label="23" value="23" />
                   <Picker.Item label="24" value="24" />
                   <Picker.Item label="25" value="25" />
                   <Picker.Item label="26" value="26" />
                   <Picker.Item label="27" value="27" />
                   <Picker.Item label="28" value="28" />
                   <Picker.Item label="29" value="29" />
                   <Picker.Item label="30" value="30" />
                   <Picker.Item label="31" value="31" />
                   </Picker>
                   <Picker
                     selectedValue={year}
                   style={styles.container3}
                     onValueChange={(itemValue, itemIndex) =>
                      setYear(itemValue)
                     }>
                     <Picker.Item label="2020" value="2020" />
                     <Picker.Item label="2021" value="2021" />
                   </Picker>
                   <Picker
                     selectedValue={hour}
                   style={styles.container4}
                     onValueChange={(itemValue, itemIndex) =>
                      setHour(itemValue)
                     }>
                     <Picker.Item label="1" value="1" />
                     <Picker.Item label="2" value="2" />
                     <Picker.Item label="3" value="3" />
                     <Picker.Item label="4" value="4" />
                     <Picker.Item label="5" value="5" />
                     <Picker.Item label="6" value="6" />
                     <Picker.Item label="7" value="7" />
                     <Picker.Item label="8" value="8" />
                     <Picker.Item label="9" value="9" />
                     <Picker.Item label="10" value="10" />
                     <Picker.Item label="11" value="11" />
                     <Picker.Item label="12" value="12" />
                   </Picker>
                   <Picker
                     selectedValue={min}
                   style={styles.container5}
                     onValueChange={(itemValue, itemIndex) =>
                      setMin(itemValue)
                     }>
                     <Picker.Item label="00" value="00" />
                     <Picker.Item label="15" value="15" />
                     <Picker.Item label="30" value="30" />
                     <Picker.Item label="45" value="45" />
                   </Picker>
                   <Picker
                     selectedValue={amPM}
                   style={styles.container6}
                     onValueChange={(itemValue, itemIndex) =>
                      setAMPM(itemValue)
                     }>
                     <Picker.Item label="AM" value="AM" />
                     <Picker.Item label="PM" value="PM" />
                   </Picker>
                   <TouchableOpacity
                     style={styles.Donebutton}
                   onPress={props.values.month = datePick, props.values.day = dayPick, props.values.year = year, props.values.hour = hour, props.values.min = min, props.values.amPM = amPM, () => setModalOpen(false)}
                   >
                     <Text style={{color: 'black', fontWeight:'bold'}}>Done</Text>
                   </TouchableOpacity>
                   </View>
                   </Modal>
                   
                   
            <TextInput
              style={globalStyles.input}
              placeholder='First and Last Name'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
              onBlur={props.handleBlur('name')}
            />
           <Text style={globalStyles.errorText}>
           {props.touched.name && props.errors.name }
          </Text>

             <TextInput
               style={globalStyles.input}
               placeholder='Home Address'
               onChangeText={props.handleChange('homeAdd')}
               value={props.values.homeAdd}
               onBlur={props.handleBlur('homeAdd')}
             />
            
                   <Text style={globalStyles.errorText}>
                   {props.touched.homeAdd && props.errors.homeAdd } </Text>

            <TextInput
              style={globalStyles.input}
              placeholder='Phone Number'
              onChangeText={props.handleChange('phone')}
              value={props.values.phone}
                   onBlur={props.handleBlur('phone')}
              keyboardType='numeric'
            />
            <Text style={globalStyles.errorText}>
            { props.touched.phone && props.errors.phone } </Text>
                   
           <TextInput
                           style={globalStyles.input}
                           placeholder='Email Address'
                           onChangeText={props.handleChange('email')}
                           value={props.values.email}
                           autoCapitalize='none'
                           onBlur={props.handleBlur('email')}
           />
           <Text style={globalStyles.errorText}>
            {props.touched.email && props.errors.email }
           </Text>
             <Button
                   onPress={() => setModalOpen(true)}
                 title="Choose Date & Time"
             />
             <TextInput
                           style={globalStyles.input}
                           placeholder='Quick Service Description'
                           onChangeText={props.handleChange('desc')}
                           value={props.values.desc}
                           onBlur={props.handleBlur('desc')}
           />
           <TouchableOpacity
                     style={{marginTop:60, marginLeft: 100}}
                   onPress={() => setSecondModal(true)}
                   >
                     <Text style={{color: 'maroon', fontWeight:'bold', fontSize: 20}}>Review Details</Text>
                   </TouchableOpacity>
                   <View style={{ height: 200 }} />
                   </ScrollView>
              </KeyboardAvoidingView>
        )}
      </Formik>
    </View>
    </TouchableWithoutFeedback>
    
    );
}

const styles = StyleSheet.create({
  container: {
    color: 'white',
    height: 50,
    width: 50,
    marginTop: 100,
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
   container17: {
    flex:1,
    paddingTop: 0,
    paddingHorizontal:0,
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
  marginLeft: 85
  },
  button2: {
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
  marginLeft: 85,
  marginBottom: 50
  },
  confirmation: {
    textAlign: 'left',
    marginTop: 25,
    marginLeft: 50,
    fontSize: 20
  },
  Donebutton: {
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
  marginTop: 180,
  marginLeft: 85
  },
  Donebutton2: {
    shadowColor: 'rgba(0, 0, 0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 5, //IOS
    backgroundColor: '#4aa600',
    elevation: 2, // Android
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  marginTop: 60,
  marginLeft: 85
  },
});
