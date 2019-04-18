import React, { Component }from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

// constructor(props){
//   super(props)
// }

export default class ForumCards extends Component {
  constructor(props)  {
      super(props);

  }



  render() {
      return (
                 <Card
            title={this.props.titleName}
            image={{uri:this.props.imageUrl}}>
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
      );
  }
}
// const ForumCards = ({ titleName, imageUrl,description }) => {
  
//     return (
//         <Card
//             title={titleName}
//             image={{uri:imageUrl}}>
//             <Text style={{marginBottom: 10}}>
//             { description }
//             </Text>
//             <View style = {styles.lineStyle} />
//             <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between',paddingTop:20,paddingBottom:10}}>

//             <Icon
//             name='thumbs-up'
//             type='font-awesome'
//             color='gray' />
//             <Icon
//             name='thumbs-down'
//             type='font-awesome'
//             color='gray' />                
//             <Icon
//             name='share-alt'
//             type='font-awesome'
//             color='gray' />

//             </View>

//             </Card>
//     );
//   };
  const styles = StyleSheet.create({
    lineStyle:{
          borderWidth: 0.5,
          borderColor:'black',
          margin:0,
     }
   });
  // export default ForumCards;