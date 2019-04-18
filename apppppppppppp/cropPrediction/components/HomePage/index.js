import React, { Component } from 'react';
import { View, Text , Scrollable , Image,TouchableOpacity,FlatList } from 'react-native';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        imgs : [2,3,4],
        changeState : -1
    };
  }

  componentDidMount(){
    let imgs = this.props.navigation.getParam("imgs");

    if (imgs.changeState == 1){
      this.setState({imgs:imgs.imgs , changeState:0})
    }

    console.log(imgs.changeState)
  }

  render() {

    if(this.changeState != -1){
      return (
        <View style={{backgroundColor:'rgba(216, 255, 216,0.6)'}}>
            <FlatList 
              horizontal
              extraData={this.state}
              data = {this.state.imgs}
              keyExtractor={(item, index) => index.toString()}
              renderItem={i => {
                  const isSelected = true 
  
                  return (
                      <View style={{ flex:1}}>
                        <TouchableOpacity >
                          <Image style={{alignSelf:"center", width:75,height:75,borderRadius:38, margin:7}} source={i.item} ></Image>
                        </TouchableOpacity>
                      </View>
                  )}}
            >
        </FlatList>
  
  
  
          <Text> textInComponent </Text>
        </View>
      );
    }
    
  }
}
