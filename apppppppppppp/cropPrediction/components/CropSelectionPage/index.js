import React, { Component } from 'react';
import { View,Image, Text ,FlatList } from 'react-native';

const routes = [
  {name:require("../../assets/images/apple_vector.jpg"), title:"apple"},
  {name:require("../../assets/images/corn_vector.jpg"), title:"corn"},
  {name:require("../../assets/images/grapes_vector.jpg"), title:"grapes"},
  {name:require("../../assets/images/peach_vector.jpg"), title:"peach"},
  {name:require("../../assets/images/pepper_vector.jpg"), title:"pepper"},
  {name:require("../../assets/images/potato_vector.jpg"), title:"potato"},
  {name:require("../../assets/images/strawberry_vector.jpg"), title:"strawberry"},
  {name:require("../../assets/images/tomato_vector.jpg"), title:"tomato"}];
  
const mages =  [
    {name:1, title:"apple"},
    {name:2, title:"corn"},
    {name:3, title:"grapes"},
    {name:4, title:"peach"},
    {name:5, title:"pepper"},
    {name:6, title:"potato"},
    {name:7, title:"strawberry"},
    {name:8, title:"tomato"},
    {name:1, title:"apple"},
    {name:2, title:"corn"},
    {name:3, title:"grapes"},
    {name:6, title:"potato"}];


export default class CropSelectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    for(i=1 ; i<10 ; i++){
      
    }

    return (
      <View>

        <FlatList 
          numColumns={3}
          data = {mages}
          
          renderItem={i => {
              // console.warn(routes[2].name) 
              // console.warn(i.item.name) 
              var queueLength = Math.floor(Math.random() * 4);
              return (
                  <View style={{ flex:1, flexDirection:"column", borderWidth:1, borderColor:"#e5e5e5", borderRadius:5}}>
                    <Image style={{alignSelf:"center", width:65,height:65,margin:7}} source={i.item.name} ></Image>
                    <Text style={{textAlign:"center", fontSize:15, marginLeft:15, marginRight:15,borderRadius:5, padding:3, backgroundColor:"#4200AE",color:"white"}}>{i.item.title}</Text>
                  </View>
              )}}
        >
      </FlatList>

      </View>
    );
  }
}
