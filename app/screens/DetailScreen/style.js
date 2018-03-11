import { StyleSheet, Dimensions } from 'react-native';
import constants from '../../config/constants';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: constants.SECONDARY_BG_COLOR,
    height,
    width,
    flex: 1
  },
  name: {
    fontSize: 35,
    color: constants.PRIMARY_BG_COLOR,
    fontWeight: '700',
    fontFamily: 'Avenir',
    paddingTop:20,
    paddingLeft:20,
    paddingRight: 20
  },
  field: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  about: {
    paddingTop:30,
    paddingLeft:20,
    paddingRight: 20
  },
  label: {
    fontSize: 20,
    color: constants.PRIMARY_BG_COLOR,
    fontWeight: '700',
    fontFamily: 'Avenir'
  },
  value: {
    fontSize: 23,
    color: '#676767',
    fontFamily: 'Avenir'
  },
  description: {
    textAlign: 'justify',
    paddingBottom: 0
  },
  rating:{
    flex: 1, flexDirection: 'row'
  },
  amenities: {
    flex:1,
    alignItems: 'flex-start'
  },
  mapView: {
    marginTop: 15,
    marginBottom: 15,
    shadowOpacity: 0.65,
    shadowRadius: 5,
    shadowColor: '#989898',
    shadowOffset: { height: 0, width: 0 },
  },
  location: {
    marginTop: -15
  },
  carousel:{
    height: 320,
    width
  }
});