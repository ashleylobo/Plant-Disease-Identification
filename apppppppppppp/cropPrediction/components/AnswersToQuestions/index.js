import React, { Component }from 'react';
import { View, Text, StyleSheet,FlatList,Image } from 'react-native';
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
  ]}
}

export default class AnswersToQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      imageUrl:'',
      description:'',
      id:''
    };
  }

  componentDidMount(){
    let myData = this.props.navigation.getParam("card");
    console.log(myData)
    this.setState({
      title:myData.title,
      imageUrl:myData.imageUrl,
      description:myData.description,
      id:myData.id
    })

  }

  render() {
    
    return (
      <View>

      <Text>asjfbkjsbdjkfbjkasdbfgmkbsmvbsdcvjksdfjk</Text>

      <View>
        <Text>Title : {this.state.title}</Text>
        <Image style={{alignSelf:"center",paddingRight:7, width:150,height:100,borderRadius:5, margin:7}} source={this.state.imageUrl} ></Image>

      </View>
      

      <Card
          title={this.props.titleName}
          image={this.props.imageUrl}>
            <Text style={{marginBottom: 10}}>
            { this.props.description }
            </Text>
          <View style = {styles.lineStyle} />
          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between',paddingTop:20,paddingBottom:10}}>

            <Icon
            name='thumbs-up'
            type='font-awesome'
            color='gray' />
            <Icon
            name='thumbs-down'
            type='font-awesome'
            color='gray' />                
            <Icon
            name='share-alt'
            type='font-awesome'
            color='gray' />

            </View>

            </Card>



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