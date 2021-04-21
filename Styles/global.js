import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 50,
    width: 50,
    borderRadius: 5,
    margin: 5,
  marginLeft: 300
  },
  input: {
    borderWidth: 1,
    borderColor: '#1e8fff',
    padding: 15,
    fontSize: 18,
    borderRadius: 6,
    margin: 5,
    marginTop: 10
  },
errorText: {
color: 'crimson',
fontWeight: 'bold',
textAlign: 'center'
}
});

