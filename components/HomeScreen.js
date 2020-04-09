import React, {Component} from 'react';
import {Button, View, Text, Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home Screen',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Buka Details Users"
          onPress={() => this.props.navigation.navigate('DetailsScreen')}
        />
      </View>
    );
  }
}