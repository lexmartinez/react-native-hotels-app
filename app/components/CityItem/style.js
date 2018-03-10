import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container:{
    alignSelf: 'stretch',
    height: 200
  },
  listitem:{
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: 200,
    width: 375,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 30,
    marginBottom: 8,
    textAlign: 'right',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  subtitle:{
    fontSize: 20,
    marginBottom: 4,
    textAlign: 'right',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  backgroundImage:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 200
  }
});