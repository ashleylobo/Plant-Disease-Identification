import React, { Component } from 'react';
import { View, Text , ScrollView , Image,TouchableOpacity,FlatList } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Advisory from './Advisory';


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

        <View style={{flex:1}}>
        
          <ScrollView>
            <FlatList 
              horizontal
              extraData={this.state}
              data = {this.state.imgs}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
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

            <Advisory style={{marginTop:10}}></Advisory>
            

          </ScrollView>

          <View style={{bottom:0 }}>

            <Footer >
              <FooterTab >
                <Button style={{backgroundColor:'rgb(216, 255, 216)'}}>
                    <Text>sadfsdf</Text>
                    <FontAwesome5 name={"bars"} brand style={{ fontSize: 20, color:'white'}} />
                </Button>
                <Button style={{backgroundColor:'rgb(216, 255, 216)'}}>
                    <Text>sadfsdf</Text>
                    <FontAwesome5 name={"bars"} brand style={{fontSize: 20, color:'white'}} />
                </Button>
                <Button active style={{ backgroundColor:'rgb(216, 255, 216)'}}>
                    <Text>sadfsdf</Text>
                    <FontAwesome5 name={"bars"} brand style={{ fontSize: 20, color:'black'}} />
                </Button>
              </FooterTab>
            </Footer>

          </View>

        </View>
      );
    }
    
  }
}
