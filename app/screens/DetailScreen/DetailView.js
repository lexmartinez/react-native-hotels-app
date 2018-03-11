import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, StatusBar, Text, Dimensions } from 'react-native';
import StarRating from 'react-native-star-rating';
import constants from '../../config/constants';
import { ShareButton } from '../../components';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GoogleStaticMap from 'react-native-google-static-map';
import styles from './style.js';
const { width } = Dimensions.get('window');

class DetailView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <ShareButton navigation={navigation}/>
      ),
    }};

  constructor(props) {
    super(props);
    this.state = {
      hotel: {amenities:{}},
    };
  }

  componentDidMount() {
    const { getHotel } = this.props;
    getHotel(this.props.navigation.state.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      this.setState({ hotel: nextProps.hotel });
      if (!this.props.navigation.state.params.hotel) {
        this.props.navigation.setParams({hotel: nextProps.hotel}) ;
      }
    }
  }

  render() {
    const fontColor = '#676767';
    const marginTop = -4;
    const hotel = this.state.hotel;
    console.log(this.state.hotel.latitude,this.state.hotel.longitude )
    return (
      <View  style={styles.container}>
        <StatusBar barStyle={constants.BAR_STYLE}/>
        <ScrollView>
          <Text style={styles.name}>{hotel.name}</Text>
          <View style={[styles.field, styles.rating]}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={hotel.stars}
              fullStarColor={constants.PRIMARY_BG_COLOR}
              emptyStarColor={constants.PRIMARY_BG_COLOR}
              starSize={25}
            />
          </View>
          <View style={styles.about}>
            <Text style={styles.label}>About</Text>
            <Text style={[styles.value, styles.description]}>{hotel.description}</Text>
          </View>
          <View style={styles.location}>
            <Text style={[styles.label,{paddingLeft:20}]}>Location</Text>
            <Icon.Button name="map-pin" backgroundColor="transparent" color={fontColor}
                         marginTop={marginTop} paddingLeft={20} paddingRight={20}>
              <Text style={styles.value}>{hotel.address}</Text>
            </Icon.Button>
            <Text style={[styles.value,{paddingLeft:50, marginTop:-10}]}>{hotel.city}, {hotel.country}</Text>
            <View style={styles.mapView}>
              <GoogleStaticMap
                latitude={(hotel.latitude || 0) + ''}
                longitude={(hotel.longitude || 0) + ''}
                zoom={14}
                size={{ width, height: 300 }}
                apiKey={constants.MAPS_KEY}
              />
            </View>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Amenities</Text>
            <View style={styles.amenities}>
              {
                hotel.amenities.wifi?
                  <FontAwesome.Button name="wifi" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
                    <Text style={styles.value}>Wi-Fi</Text>
                  </FontAwesome.Button>:null
              }
              {
                hotel.amenities.pool?
                  <FontAwesome.Button name="tint" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
                    <Text style={styles.value}>Pool</Text>
                  </FontAwesome.Button>:null
              }
              {
                hotel.amenities.spa?
                  <FontAwesome.Button name="bed" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
                    <Text style={styles.value}>Spa</Text>
                  </FontAwesome.Button>:null
              }
              {
                hotel.amenities.parking?
                  <FontAwesome.Button name="car" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
                    <Text style={styles.value}>Parking</Text>
                  </FontAwesome.Button>:null
              }
              {
                hotel.amenities.ac?
                  <FontAwesome.Button name="snowflake-o" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
                    <Text style={styles.value}>A/C</Text>
                  </FontAwesome.Button>:null
              }
              {
                hotel.amenities.restaurant?
                  <FontAwesome.Button name="cutlery" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
                    <Text style={styles.value}>Restaturant</Text>
                  </FontAwesome.Button>:null
              }
              {
                hotel.amenities.bar?
                  <FontAwesome.Button name="glass" size={19} backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
                    <Text style={styles.value}>Bar</Text>
                  </FontAwesome.Button>:null
              }
              {
                hotel.amenities.gym?
                  <FontAwesome.Button name="trophy" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
                    <Text style={styles.value}>Gym</Text>
                  </FontAwesome.Button>:null
              }
            </View>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Contact</Text>
            <Icon.Button name="globe" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
              <Text style={styles.value}>{hotel.website}</Text>
            </Icon.Button>
            <Icon.Button name="mail" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
              <Text style={styles.value}>{hotel.email}</Text>
            </Icon.Button>
            <Icon.Button name="phone" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
              <Text style={styles.value}>{hotel.phone}</Text>
            </Icon.Button>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}></Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

DetailView.propTypes = {
  getHotel: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  hotel: PropTypes.object.isRequired
};

export default DetailView;