import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container:{
    alignSelf: 'stretch',
    height: 200
  },
  listitem:{
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: 200,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 30,
    marginBottom: 8,
    textAlign: 'right',
    color: '#fff',
    fontFamily: 'Avenir'
  },
  subtitle:{
    fontSize: 20,
    marginBottom: 4,
    textAlign: 'right',
    color: '#fff',
    fontFamily: 'Avenir'
  },
  backgroundImage:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 200
  }
});