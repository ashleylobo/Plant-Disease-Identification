import React, { Component }from 'react';
import { View, Text, StyleSheet,FlatList,Image,TouchableOpacity,ScrollView,Dimensions} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {Fab} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// const data = [
//   {id:1,title:"What is This?",description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.", imageUrl:"https://i.imgur.com/v2HxvF3.jpg"},
//   {id:2,title:"Tomato Problem" , description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries." ,imageUrl:"https://i.imgur.com/aOGCxz5.jpg"},
//   {id:3,title:"Corn leaf Pink?",description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.", mageUrl:"https://i.imgur.com/v2HxvF3.jpg"},
//   {id:4,title:"Tomato Leaf turning pale yellow?",description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.",  imageUrl:"https://i.imgur.com/aOGCxz5.jpg"},
//   {id:5,title:"Help needed Tomato?",description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.",mageUrl:"https://i.imgur.com/v2HxvF3.jpg"},
//   {id:6,title:"Cherry plant spots",description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.",  imageUrl:"https://i.imgur.com/aOGCxz5.jpg"},
// ];

const solution = {
  1:{ title:"What is This?",
  description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.", 
  imageUrl:require('../../assets/images/advisory_vector.jpeg'),
  comments:[
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons A",
    id:1},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons B",
    id:2},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons C",
    id:3},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons D",
    id:4},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons E",
    id:5}
  ]},
  2:{ title:"What is This?",
  description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.", 
  imageUrl:require('../../assets/images/advisory_vector.jpeg'),
  comments:[
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons A",
    id:1},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons B",
    id:2},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons C",
    id:3},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons D",
    id:4},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons E",
    id:5}
  ]},
  3:{ title:"What is This?",
  description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.", 
  imageUrl:require('../../assets/images/advisory_vector.jpeg'),
  comments:[
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons A",
    id:1},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons B",
    id:2},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons C",
    id:3},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons D",
    id:4},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons E",
    id:5}
  ]},
  4:{ title:"What is This?",
  description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.", 
  imageUrl:require('../../assets/images/advisory_vector.jpeg'),
  comments:[
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons A",
    id:1},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons B",
    id:2},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons C",
    id:3},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons D",
    id:4},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons E",
    id:5}
  ]},
  5:{ title:"What is This?",
  description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.", 
  imageUrl:require('../../assets/images/advisory_vector.jpeg'),
  comments:[
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons A",
    id:1},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons B",
    id:2},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons C",
    id:3},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons D",
    id:4},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons E",
    id:5}
  ]},
  6:{ title:"What is This?",
  description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.", 
  imageUrl:require('../../assets/images/advisory_vector.jpeg'),
  comments:[
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons A",
    id:1},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons B",
    id:2},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons C",
    id:3},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons D",
    id:4},
    {answer:"Here is the full set of answers gonna get from DB",
    name:"Dr. Dragons E",
    id:5}
  ]}
}

export default class AnswersToQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:props.navigation.getParam("card").title,
      imageUrl:'',
      description:'',
      id:'',
      comments:''
    };
  }

  componentWillMount(){
    let myData = this.props.navigation.getParam("card");
    
    console.warn(myData)

    this.setState({
      title:myData.title,
      imageUrl:myData.imageUrl,
      description:myData.description,
      id:myData.id,
      comments:solution[myData.id].comments
      
    })

  }

  render() {
    return (
      <View>

      <ScrollView>

        <View style={{borderWidth:1 , borderRadius:5,borderColor:'#dbdbdb',margin:10 , marginBottom:5}}>
          <Text style={{textAlign:'center' ,fontSize:24 , color:'#0c420c'}}>Title : {this.state.title}</Text>
          <Image style={{alignSelf:"center",paddingRight:7, width:Dimensions.get('window').width-50 , height:200, margin:7}} source={this.state.imageUrl} ></Image>
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