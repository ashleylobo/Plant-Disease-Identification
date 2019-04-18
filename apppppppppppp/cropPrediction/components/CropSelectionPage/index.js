import React, { Component } from 'react';
import { View,Image, Text ,FlatList,TouchableOpacity,AsyncStorage} from 'react-native';
import {Button} from 'native-base';
import LoginSignUp from '../LoginSignUp';


const routes = [
  {name:require("../../assets/images/apple_vector.jpg"), title:"apple"},
  {name:require("../../assets/images/corn_vector.jpg"), title:"corn"},
  {name:require("../../assets/images/grapes_vector.jpg"), title:"grape"},
  {name:require("../../assets/images/peach_vector.jpg"), title:"peach"},
  {name:require("../../assets/images/pepper_vector.jpg"), title:"pepper"},
  {name:require("../../assets/images/potato_vector.jpg"), title:"potato"},
  {name:require("../../assets/images/strawberry_vector.jpg"), title:"strawberry"},
  {name:require("../../assets/images/tomato_vector.jpg"), title:"tomato"},
];
  
const mages =  [
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
  {name:require("../../assets/images/orange_vector.jpg"), title:"orange"}];

export default class CropSelectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apple:0,
      corn:0,
      grapes:0,
      peach:0,
      pepper:0,
      strawberry:0,
      tomato:0,
      onions:0,
      mango:0,
      melon:0,
      orange:0,
      changeState:0,
      borderr:0,
    };
  }

  componentDidMount(){
    
    var res = null

    AsyncStorage.getItem('checkState', (err, result) => {
      //console.log("resulttttttttttt",result);
      res = JSON.parse(result)
    
      if(res != null){
        console.log("maiiiiiiiiiiiinResu",res.imgList)
        this.setState({changeState:1})

        this.props.navigation.navigate('homePage',{imgs:{imgs:res.imgList,changeState:this.state.changeState}})
      }
    
    });
  }

  homePageFunction(){
    var imgList = []
    var imgDictList = []

    for(i=0 ; i<mages.length ; i++){
      if(this.state[mages[i].title]){
          imgList.push(mages[i].name)
          var imgDict = {
              url:mages[i].name,
              title:mages[i].title
          }
          imgDictList.push(imgDict)
      }
    }

    var finaleList = {
      state:1,
      imgList:imgDictList
    }

    AsyncStorage.setItem('checkState', JSON.stringify(finaleList))

    console.log('imgDIct', imgDictList)
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
              // console.warn(routes[2].name) 
              // console.warn(i.item) 
              var queueLength = Math.floor(Math.random() * 4);
              return (
                  <View style={{ flex:1, flexDirection:"column", borderWidth:this.state[i.item.title] , margin:5, borderColor:"black", borderRadius:25}}>
                    <TouchableOpacity onPress={()=> this.state[i.item.title] ? this.setState({[i.item.title]: 0 , borderr:0}):this.setState({[i.item.title]: 2, changeState:1,borderr:1})}>
                      <Image style={{alignSelf:"center", width:65,height:65,margin:7}} source={i.item.name} ></Image>
                      <Text style={{textAlign:"center", fontSize:18, marginLeft:15, marginRight:15,borderRadius:5, padding:3,color:"black"}}>{i.item.title}</Text>
                      {/* <CheckBox style={{position:'absolute' , left:0 }} checked={this.state[i.item.title] } on={true}></CheckBox> */}
                    </TouchableOpacity>
                  </View>
              )}}
        >
      </FlatList>

     
      <Button style={{marginTop:10,alignSelf:'center' , width:100 , justifyContent:'center'}} 
        onPress={()=>this.homePageFunction()}>
        <Text style={{textAlign:'center' , color:'white'}}>Submit</Text></Button>        
      </View>
    );
  }
}

