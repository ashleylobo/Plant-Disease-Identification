import React, { Component }from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'
import { Container,Fab, Content, Footer, FooterTab, Button} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import  ForumCards  from './forumCards'
import axios from 'axios';

//onPress={() => this.props.naviagtion.navigate('answersToQuestions',{card:{titleName:item.title,imageUrl:item.imageUrl,description:item.description}})}

// const data = [
//   {id:1,title:"What is This?",description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.", imageUrl:require('../../assets/base_plants/corn.jpg')},
//   {id:2,title:"Tomato Problem" , description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries." ,imageUrl:require('../../assets/base_plants/apple.jpg')},
//   {id:3,title:"Corn leaf Pink?",description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.", imageUrl:require('../../assets/base_plants/grape.jpg')},
//   {id:4,title:"Tomato Leaf turning pale yellow?",description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.",  imageUrl:require('../../assets/base_plants/corn.jpg')},
//   {id:5,title:"Help needed Tomato?",description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.",imageUrl:require('../../assets/base_plants/apple.jpg')},
//   {id:6,title:"Cherry plant spots",description:"Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries.",  imageUrl:require('../../assets/base_plants/grape.jpg')},
// ];


export default class Forum extends Component {
  constructor(props) {
    console.log("hello shit")
    super(props);
    this.state = {
      data : []
    };
  }

  async componentDidMount(){

    var qdata = []
    console.log("comunting")
    await axios.get('https://plantdiseasecomps2020.herokuapp.com/allqts').then( res => {

      let data = res.data;
      console.log(" getting data" ,  data[0])
      data.forEach(ele => {
        
        let query = {
          id : ele.qno,
          title : ele.questions,
          description : "",
          type : ele.type,
          imageUrl : ele.image_path
        }
        console.log(query)
        if ( ele.questions !== null )
          qdata.push( query );

      });
      
    })

    this.setState({data:qdata})
  }

  render() {
    
    return (

      <View style={{flex:1}}>
        
      <View>
        <FlatList
          numColumns={1}
          data={this.state.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
              <View>
                <ForumCards navigation={this.props.navigation} fourmid={item.id} titleName={item.title}  imageUrl={item.imageUrl} description={item.description}  />
              </View>
        )}
        />
      </View>

 
        <Footer style={{position:'absolute',bottom: 0}} >
          <FooterTab >
            <Button style={{backgroundColor:'rgb(237, 255, 237)', borderRadius:0}}
              onPress={() => this.props.navigation.navigate('homePage')}>
                <FontAwesome5 name={"home"} brand style={{ fontSize: 20, color:'#0c420c'}} />
                <Text style={{color:'#0c420c'}}>HomePage</Text>
            </Button>
            <Button style={{backgroundColor:'rgb(216, 255, 216)', borderRadius:0}}
              onPress={() => this.props.navigation.navigate('forum')}>
                <FontAwesome5 name={"address-card"} brand style={{ fontSize: 20, color:'#0c420c'}} />
                <Text style={{color:'#0c420c'}}>Forum</Text>
            </Button>
            <Button active style={{ backgroundColor:'rgb(237, 255, 237)' , borderRadius:0}}>
                <FontAwesome5 name={"chart-line"} brand style={{ fontSize: 20, color:'#0c420c'}} />
                <Text style={{color:'#0c420c'}}>Prediction</Text>
            </Button>
          </FooterTab>
        </Footer>

    


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
const styles = StyleSheet.create({
  lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:0,
   }
 });

//  this.props.navigation.navigate('forumQuery', {
//   forumId:item.id,
// });




        // {/* <View>
        //   <FlatList
        //     contentContainerStyle={{
        //       flexDirection: 'column',
        //       width: '100%'
        //     }}
        //     data={data}
        //     keyExtractor={item => item.id.toString()}
        //     renderItem={({ item }) => (
        //   <View>
        //    <ForumCards navigation={this.props.navigation} fourmid={item.id} titleName={item.title}  imageUrl={item.imageUrl} description={item.description}  />
        //   </View>
        //   )}
        //   />
        // </View> */}