import React, { Component }from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {Fab} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const data = [
  {id:1,title:"What is This?",description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.", imageUrl:"https://i.imgur.com/v2HxvF3.jpg"},
  {id:2,title:"Tomato Problem" , description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries." ,imageUrl:"https://i.imgur.com/aOGCxz5.jpg"},
  {id:3,title:"Corn leaf Pink?",description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.", mageUrl:"https://i.imgur.com/v2HxvF3.jpg"},
  {id:4,title:"Tomato Leaf turning pale yellow?",description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.",  imageUrl:"https://i.imgur.com/aOGCxz5.jpg"},
  {id:5,title:"Help needed Tomato?",description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.",mageUrl:"https://i.imgur.com/v2HxvF3.jpg"},
  {id:6,title:"Cherry plant spots",description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.",  imageUrl:"https://i.imgur.com/aOGCxz5.jpg"},
];


export default class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <View>

        <FlatList
          contentContainerStyle={{

            flexDirection: 'column',

            width: '100%'
          }}
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
        <View>
        <ForumCards titleName={item.title}  imageUrl={item.imageUrl} description={item.description}  />
      </View>
          )}
          />

        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <FontAwesome5 name={"bars"} brand style={{ fontSize: 20, color:'black'}} />
          </Fab>

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