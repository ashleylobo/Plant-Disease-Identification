import React, { Component } from 'react';
import { View, Text , Button } from 'react-native';

export default class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button title="Forum" onPress={()=>this.props.naviagtion.navigate('homePage')}></Button>
      </View>
    );
  }
}
