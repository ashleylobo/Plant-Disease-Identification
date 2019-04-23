import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import LoadScreen from '../LoadScreen';

export default class NoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount(){

    AsyncStorage.getItem('checkState', (err, result) => {
        //console.log("resulttttttttttt",result);
        res = JSON.parse(result)
      
        if(res != null){
          console.log("maiiiiiiiiiiiinResu",res.imgList)
          this.setState({changeState:1})
  
          this.props.navigation.navigate('homePage',{imgs:{imgs:res.imgList,changeState:1}})
        }else{
            this.props.navigation.navigate('cropSelectionPage')
        }
      
      });

  }

  render() {
    return (
      <LoadScreen/>
    );
  }
}