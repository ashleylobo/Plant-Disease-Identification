import React, { Component } from 'react';
import { View,Image, Text ,FlatList,TouchableOpacity } from 'react-native';
import {CheckBox,Button} from 'native-base';

const routes = [
  {name:require("../../assets/images/apple_vector.jpg"), title:"apple"},
  {name:require("../../assets/images/corn_vector.jpg"), title:"corn"},
  {name:require("../../assets/images/grapes_vector.jpg"), title:"grapes"},
  {name:require("../../assets/images/peach_vector.jpg"), title:"peach"},
  {name:require("../../assets/images/pepper_vector.jpg"), title:"pepper"},
  {name:require("../../assets/images/potato_vector.jpg"), title:"potato"},
  {name:require("../../assets/images/strawberry_vector.jpg"), title:"strawberry"},
  {name:require("../../assets/images/tomato_vector.jpg"), title:"tomato"},
  {name:require("../../assets/images/onions_vector.jpg"), title:"onions"},
  {name:require("../../assets/images/mango_vector.jpg"), title:"mango"},
  {name:require("../../assets/images/watermelon_vector.jpg"), title:"melon"},
  {name:require("../../assets/images/orange_vector.jpg"), title:"orange"},];
  
const mages =  [
    {name:1, title:"apple"},
    {name:2, title:"corn"},
    {name:3, title:"grapes"},
    {name:4, title:"peach"},
    {name:5, title:"pepper"},
    {name:6, title:"potato"},
    {name:7, title:"strawberry"},
    {name:8, title:"tomato"},
    {name:9, title:"onions"},
    {name:10, title:"mango"},
    {name:11, title:"melon"},
    {name:12, title:"orange"}];

export default class CropSelectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apple:false,
      corn:false,
      grapes:false,
      peach:false,
      pepper:false,
      strawberry:false,
      tomato:false,
      onions:false,
      mango:false,
      melon:false,
      orange:false,
      changeState:0
    };
  }

  homePageFunction(){
    var imgList = []
    var xyzzz = []

    for(i=0 ; i<mages.length ; i++){
      //console.warn(mages[i])
      if(this.state[mages[i].title]){
          imgList.push(mages[i].name)
          const temp = [mages[i].name , mages[i].title]
          xyzzz.push(temp)
      }
    }

    this.props.navigation.navigate('homePage',{imgs:{imgs:imgList,changeState:this.state.changeState}})

  }

  render() {
    console.disableYellowBox = true
    return (
      <View style={{alignContent:'center'}}>

        <FlatList 
          extraData={this.state}
          numColumns={3}
          data = {mages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={i => {
              const isSelected = true 

              return (
                  <View style={{ flex:1, flexDirection:"column", borderWidth:1, margin:5, borderColor:"#e5e5e5", borderRadius:5}}>
                    <TouchableOpacity onPress={()=> this.state[i.item.title] ? this.setState({[i.item.title]: false , changeState:1}):this.setState({[i.item.title]: true, changeState:1})}>
                      <Image style={{alignSelf:"center", width:65,height:65,margin:7}} source={i.item.name} ></Image>
                      <Text style={{textAlign:"center", fontSize:18, marginLeft:15, marginRight:15,borderRadius:5, padding:3,color:"black"}}>{i.item.title}</Text>
                      <CheckBox style={{position:'absolute' , left:0 }} checked={this.state[i.item.title] } on={true}></CheckBox>
                    </TouchableOpacity>
                  </View>
              )}}
        >
      </FlatList>

     
      <Button style={{marginTop:10,alignSelf:'center' , width:100 , justifyContent:'center'}} 
        onPress={()=>this.homePageFunction()}><Text style={{textAlign:'center' , color:'white'}}>Submit</Text></Button>
                
      </View>
    );
  }
}

