
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



function Confirm({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textheader} >
        Thank You for choosing CITE Techs! 
      </Text>
      <Text style={styles.textheader2} >
      Expect confirmation email within 1-24 hours.
      </Text>
      <TouchableOpacity
                     style={styles.Donebutton2}
                     onPress={() => {navigation.reset({
                      index: 0,
                      routes: [{ name: 'CITE Techs' }],
                    })}}
                    >
                     <Text style={{color: 'black', fontWeight:'bold'}}>Done</Text>
                   </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: "center",
      padding: 0,
    },
    Donebutton2: {
      shadowColor: 'rgba(0, 0, 0, .8)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 5, //IOS
      backgroundColor: '#167fe0',
      elevation: 2, // Android
      height: 50,
      width: 100,
      marginBottom: 75,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    textheader: {
      fontSize: 50,
      marginLeft: 15,
      marginTop: 10,
      textAlign: 'center'
    },
    textheader2: {
      fontSize: 40,
      marginLeft: 10,
      fontWeight: 'bold',
      alignItems: 'center',
      textAlign: 'center'
    }
});

export {Confirm};
