import React, { Component } from 'react';
import { View, Text , ScrollView , Image,TouchableOpacity,FlatList } from 'react-native';
import { Container,Fab, Content, Footer, FooterTab, Button, Icon } from 'native-base';
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


    console.log('datatatatata' , imgs)

    if (imgs.changeState == 1){
      this.setState({imgs:imgs.imgs , changeState:0})
    }

    console.log(this.state.imgs)
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
                      <View style={{ flex:1 , margin:5}}>
                        <TouchableOpacity >
                          <Image style={{alignSelf:"center", width:75,height:75,borderRadius:38, margin:7}} source={i.item.url} ></Image>
                          <Text style={{textAlign:'center' , color:'#0c420c' , fontSize:15}} >{i.item.title}</Text>
                        </TouchableOpacity>
                      </View>
                  )}}
             >
            </FlatList>

            <Advisory style={{marginTop:10}}></Advisory>
            

          </ScrollView>

          {/* chalkboard-teacher */}

          <View style={{bottom:0 }}>

            <Footer >
              <FooterTab >
                <Button style={{backgroundColor:'rgb(216, 255, 216)', borderRadius:0}}>
                    <FontAwesome5 name={"home"} brand style={{ fontSize: 20, color:'#0c420c'}} />
                    <Text style={{color:'#0c420c'}}>HomePage</Text>
                </Button>
                <Button style={{backgroundColor:'rgb(237, 255, 237)', borderRadius:0}}>
                    <FontAwesome5 name={"address-card"} brand style={{ fontSize: 20, color:'#0c420c'}} />
                    <Text style={{color:'#0c420c'}}>Forum</Text>
                </Button>
                <Button active style={{ backgroundColor:'rgb(237, 255, 237)' , borderRadius:0}}>
                    <FontAwesome5 name={"chart-line"} brand style={{ fontSize: 20, color:'#0c420c'}} />
                    <Text style={{color:'#0c420c'}}>Prediction</Text>
                </Button>
              </FooterTab>
            </Footer>

          </View>


          <Fab
            active={this.state.active}
            containerStyle={{ }}
            style={{ backgroundColor: 'white' , marginBottom:45}}
            position="bottomRight">
            <FontAwesome5 name={"chalkboard-teacher"} brand style={{ fontSize: 20, color:'#0c420c'}} />
          </Fab>

        </View>
      );
    }
    
  }
}
