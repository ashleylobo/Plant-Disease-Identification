import React, { Component }from 'react';
import { View, Text, StyleSheet,FlatList,Image,TouchableOpacity,ScrollView,Dimensions} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {Fab} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import backendip from '../../constants/backendip';

export default class AnswersToQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:props.navigation.getParam("card").title,
      imageUrl:'',
      description:'',
      id:'',
      comments:'',
      commentsArray : []
    };
  }

  componentWillMount(){
    let myData = this.props.navigation.getParam("card");
    
    var coms = []
    axios.get(`${backendip}/listans?quno=${myData.id}`)
          .then( res =>{
            console.log("called api")
            var data = res.data['list1'];
            
            data.forEach(ele => {

              var query = {
                id : ele.ansno,
                answer : ele.answer,
                upvotes : ele.upvotes,
                downvotes : ele.downvotes,
                name : ele.usera,
                type : ele.type
              }
              coms.push( query );

            });


            this.setState({
              title:myData.title,
              imageUrl:myData.imageUrl,
              description:myData.description,
              id:myData.id,
              comments: coms
              
            })

          }).catch(err => console.log(err , " error"))



  }

  render() {
    return (
      <View>

      <ScrollView>

        <View style={{borderWidth:1 , borderRadius:5,borderColor:'#dbdbdb',margin:10 , marginBottom:5}}>
          <Text style={{textAlign:'center' ,fontSize:24 , color:'#0c420c'}}>Title : {this.state.title}</Text>
          <Image style={{alignSelf:"center",paddingRight:7, width:Dimensions.get('window').width-50 , height:200, margin:7}} source={{ uri : this.state.imageUrl }} ></Image>
        </View>
        
        <View style={{flexDirection:'row'}}>
          <Text style={{paddingLeft:15, textAlign:'center',fontSize:20 , color:'#0c420c'}}>{this.state.comments.length} Answers :-</Text>
          {/* <FontAwesome5 name={"home"} brand style={{ fontSize: 20, color:'#0c420c'}} /> */}
        </View>
                
        <View style={{borderBottomColor: '#dbdbdb',borderBottomWidth: 2 ,marginBottom:5}} />

        <FlatList 
            extraData={this.state}
            data = {this.state.comments}
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={i => {
              const isSelected = true 
              return (
                <View style={{flex:1,borderWidth:1,borderRadius:5, borderColor:'#dbdbdb',marginLeft:15,marginRight:15,marginBottom:10}}>
                  
                  <TouchableOpacity style={{flex:1}}>
                  
                    <View style={{flex:1 ,backgroundColor:'#dbdbdb' }}>
                      <Text style={{paddingLeft:7,fontSize:12 ,marginBottom:2,color:'#0c420c'}}>Name : {i.item.name}</Text>
                      <Text style={{paddingLeft:7,fontSize:18 ,color:'#0c420c'}}>{i.item.answer}</Text>                       
                    </View>
                    
                  </TouchableOpacity>
                </View>
              )
            }}
          >
          </FlatList>
      </ScrollView>
      
    </View>
    );
  }
}
const styles = StyleSheet.create({
  lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:0,
   }
 });