import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, Button
} from 'react-native';

type Props = {};
export default class Home extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Home Screen
        </Text>
        <Button
          title="City, Country"
          onPress={() => this.props.navigation.navigate('Hotels')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
