import {Dimensions, StyleSheet} from "react-native";
import constants from "../../config/constants";
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 300,
  },
  header: {
    backgroundColor: 'rgba(12, 12, 25, 0.75)',
    height: 300,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(12, 12, 25, 0.55)',
  },
  name:{
    fontSize: 30,
    marginBottom: 0,
    color: '#fff',
    fontWeight: "800"
  },
  location:{
    fontSize: 20,
    marginBottom: 4,
    color: '#fff',
    fontWeight: "500"
  },
  avatar: {
    borderRadius: 60,
    width: 120,
    height: 120,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.45)'
  },
  field: {
    paddingTop: 15,
    paddingLeft: 20
  },
  first: {
    paddingTop:40,
    paddingLeft:20
  },
  label: {
    fontSize: 20,
    color: constants.PRIMARY_BG_COLOR,
    fontWeight: '700',
    fontFamily: 'Avenir'
  },
  value: {
    fontSize: 25,
    color: '#676767',
    fontFamily: 'Avenir'
  }
});
