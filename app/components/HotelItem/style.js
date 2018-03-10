import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 300
  },
  listitem: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: 300,
    width,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20
  },
  title: {
    fontSize: 30,
    marginBottom: 0,
    textAlign: 'left',
    color: '#fff',
    fontWeight: '800',
    fontFamily: 'Avenir'
  },
  subtitle: {
    marginBottom: 4
  },
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 300,
  },
  price: {
    position:'relative',
    top: 0,
    alignSelf: 'flex-start',
    color: '#00ace6',
    fontWeight: '800',
    fontFamily: 'Avenir'
  }
});