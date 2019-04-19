import React, { Component } from 'react';
import { View, Text,StyleSheet,Image ,ScrollView,Dimensions } from 'react-native';

import {Card,CardItem, Thumbnail, Button, Icon, Left,Body,Right,Content,Container} from 'native-base';

export default class LoginSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
  
    const {headerTitle,textFormat,headerTitle2}=styles  
    return (
      <Container>
      <Content style={{ flex: 1, backgroundColor: '#F5FCFF',flexDirection:'row',borderColor:'black',borderWidth:10, borderColor:'black',borderWidth:10}}>
      <ScrollView>
      <View style={{flex:1,justifyContent:'flex-start', backgroundColor:"#b7babf",borderRadius:20}}>
      
       <Text style={headerTitle} >   Dos                     <Text style={headerTitle2}>  Dont's </Text></Text>
       
       <Card style={{flex: 1}}>
            <CardItem>
              <View style={{flex:1,flexDirection:'row'}} >
              <View  >
              <Thumbnail source={require("../../assets/images/right.jpg")}style={{height:25,width:30}}  />
                  <Text style={textFormat}>Take picture in a well lighted area</Text>
                
              </View>
                

                <View>
  
                <Thumbnail source={require("../../assets/images/wrong.jpg")}style={{height:25,width:30}}  />
        
  
                  
                   <Text style={textFormat} >Don't click in dark environment</Text>
  
                </View>
                </View>

            </CardItem>
            <CardItem>
              <Body>
                <Image source={require("../../assets/rightwrong/light.jpg")} style={{height:130,width:140, borderRadius:10}}/>
              
              </Body>
              <Body>
                <Image source={require("../../assets/rightwrong/dark.jpeg")} style={{height:130,width:140, borderRadius:10}}/>
                
              </Body>
            </CardItem>
            <CardItem>
              <View>
              <Thumbnail source={require("../../assets/images/right.jpg")}style={{height:25,width:30}}  />

                
                  <Text style={textFormat} >Take picture at proper distance</Text>
                
              </View>

                

              <View>

              <Thumbnail source={require("../../assets/images/wrong.jpg")}style={{height:25,width:30}}  />
      

  
                 <Text style={textFormat} >Don't click picture far </Text>

              </View>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require("../../assets/rightwrong/distance.jpg")} style={{height:130,width:140,borderRadius:10}}/>
               
              </Body>
              <Body>
                <Image source={require("../../assets/rightwrong/far.jpg")} style={{height:130,width:140,borderRadius:10}}/>
              
              </Body>
            </CardItem>
            <CardItem>
              <View style={{flex:1,flexDirection:'row'}} >
              <View> 
              <Thumbnail source={require("../../assets/images/right.jpg")}style={{height:25,width:30}}  />

              
                  <Text style={textFormat} >Click a clear picture</Text>
                
                  </View>
                  <View>        

                 <Thumbnail source={require("../../assets/images/wrong.jpg")}style={{height:25,width:30}}  />
      

                
                  <Text style={textFormat} >Don't click blurry image</Text>
              
                  </View>

              </View>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require("../../assets/rightwrong/notblurry.jpeg")} style={{height:130,width:140, borderRadius:10}}/>
                
              </Body>
              <Body>
                <Image source={require("../../assets/rightwrong/blurry.jpg")} style={{height:130,width:140, borderRadius:10}}/>
                
              </Body>
            </CardItem>
           </Card>
       </View>
       </ScrollView>
     </Content>
     </Container>
    );
  }
}

const styles=StyleSheet.create({
  headerTitle:{
    justifyContent:'center',
    alignItems:'center',
    fontSize:30,
    fontWeight:'bold',
    color:"green"
  },
  headerTitle2:{
  marginLeft:30,
    color:"red"
  },
  textFormat:{
    width:Dimensions.get('window').width*0.5,
    paddingRight:10
  }
})