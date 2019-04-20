import React, { Component } from 'react';
import { View, Text , ScrollView , Image,TouchableOpacity,FlatList } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Advisory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs:[
        {uri:require('../../assets/images/advisory_vector.jpeg') , description:'Demonstrate your commitment to health and .....' , type:'ADVISE'},
        {uri:require('../../assets/images/clean_vector.jpg') , description:'Demonstrate your commitment to health and .....' , type:'CLEANING'},
        {uri:require('../../assets/images/fertilizers_vector.jpg') , description:'Demonstrate your commitment to health and .....' , type:'FERTILIZERS'},
        {uri:require('../../assets/images/harvest_vector.jpg') , description:'Demonstrate your commitment to health and .....' , type:'HARVESTING'}]
    };
  }

  render() {
    return (
      <View>
        <View style={{borderBottomColor: '#217c27',borderBottomWidth: 1}} />

        <View style={{flex:1 , flexDirection:'row' ,justifyContent:'center',paddingTop:10}}>
          <Text style={{color:'#0c420c' , fontSize:25 }}> Advisory </Text>
          <FontAwesome5 name={"user-graduate"} brand style={{ paddingLeft:15,paddingTop:3,fontSize: 25, color:'#0c420c'}} />
        </View>

        <FlatList 
            extraData={this.state}
            data = {this.state.imgs}
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={i => {
                const isSelected = true 

                return (
                    <View style={{flex:1,backgroundColor:'rgba(255,255,255,0)',borderWidth:1,borderRadius:5, borderColor:'#dbdbdb',marginLeft:15,marginRight:15,marginTop:15}}>
                      <TouchableOpacity style={{flex:1,flexDirection:'row'}}>
                      
                        <View style={{flex:0.58 ,backgroundColor:'rgba(255,255,255,0)' }}>
                          <Text style={{paddingLeft:7,fontSize:18 ,marginBottom:10,color:'#0c420c'}}>{i.item.description}</Text>

                          <Button style={{alignSelf:'center',justifyContent:'center',backgroundColor:'#0c420c' , borderRadius:5 ,color:'white',width:155,height:30}}>
                            <Text style={{fontSize:18 , fontWeight:'bold',color:'white'}}>{i.item.type}</Text>
                          </Button>

                        </View>

                        <View style={{flex:0.42,justifyContent:'center'}}>
                          <Image style={{alignSelf:"center",paddingRight:7, width:150,height:100,borderRadius:5, margin:7}} source={i.item.uri} ></Image>
                        </View>
                        
                      </TouchableOpacity>
                    </View>
                )}}
            >
          </FlatList>

      </View>
    );
  }
}
