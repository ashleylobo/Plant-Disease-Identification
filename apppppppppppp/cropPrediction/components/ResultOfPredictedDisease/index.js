import React, { Component } from 'react';
import { View, Text,Button} from 'react-native';

export default class ResultOfPredictedDisease extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button title="Result Of Predicted Disease" onPress={()=>this.props.naviagtion.navigate('forum')}></Button>
      </View>
    );
  }
}
