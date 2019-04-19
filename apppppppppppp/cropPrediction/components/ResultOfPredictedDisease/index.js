import React, { Component } from 'react';
import { Modal, View, StyleSheet,Text,Button, Image,PermissionsAndroid,Dimensions} from 'react-native';
// import { Button as nButton , Text as nText } from 'native-base'
import ImagePicker from "react-native-image-picker";
import {TFLiteImageRecognition} from 'react-native-tensorflow-lite';
import Dialog, { DialogContent,DialogTitle } from 'react-native-popup-dialog';
import Instructions from '../Instructions'
import models from '../../constants/models';
import RemedyPage from '../Remedy';


import { Root } from 'native-base';
export default class ResultOfPredictedDisease extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path : false,
      uri : false,
      resultObj : {},
      predicted : false,
      visible:true,
      showRemedy : false
    };

    try {
      // Initialize Tensorflow Lite Image Recognizer

      const {navigation} = this.props
      group = parseInt( navigation.getParam('group',1) )

      this.classifier = new TFLiteImageRecognition({
        model: `${models[group - 1]}.tflite`,  // Your tflite model in assets folder.
        labels: `${models[group - 1]}.txt` // Your label file
      })
 
    } catch(err) {
      alert(err)
    }

  }

  

  async classifyImage(imagePath) {
    try {
      const results = await this.classifier.recognize({
        image: imagePath, // Your image path.
        inputShape: 224, // the input shape of your model. If none given, it will be default to 224.
      })
 
      const resultObj = {
                name: results[0].name,  
                confidence: results[0].confidence*100, 
                inference: results[0].inference + "ms"
            };
      console.log(resultObj)      
      this.setState(resultObj)
      this.setState({predicted : true})
        
    } catch(err) {
      alert(err)
    }   
  }

  async componentDidMount() {
    console.log("mounting hello");
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );

    console.log(granted);
  }

  setModalVisible(visible) {
    this.setState({predicted: visible});
  }

  getPhotos = async () => {
    ImagePicker.showImagePicker({}, response => {
      // console.warn(response.path)
      // console.log(response.uri);
      this.setState({
        path : response.path,
        uri : response.uri
      });
      
    });
};  

  render() {
    const {navigation}=this.props
    group=navigation.getParam('group',1)
    return (
      <View>
          <Dialog
            visible={this.state.visible}           
            height="80%"
            width='95%'
            onTouchOutside={() => {
              this.setState({ visible: false });
            }}
            style={{flex:1,flexWrap:'wrap'}}
          >
          <View style={{flexDirection:'row' , justifyContent:'space-around' , backgroundColor:'#dbdbdb'}}>

            <Text style={{fontSize:28 , color:'green'}}>Do's</Text>
            <Text style={{fontSize:28, color:'red'}}>Dont's</Text>
          
          </View>
          
          <View style={{flex:1}}>
            <Instructions style={{flex:1,flexWrap:'wrap'}} ></Instructions>
          </View>
          
         
         </Dialog>
             
          <View style={{marginTop: 22}}>

            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.predicted}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <View style={{marginTop: 22}}>
                <View>

            <View style={{justifyContent:'center'}}>
              <View style={{alignSelf:'center', borderRadius:5 ,width:Dimensions.get('window').width-150 , borderWidth:1 , color:'#dbdbdb',margin:10}}>
                <Text style={{fontSize:25 , textAlign:'center'}}>Disease</Text>
                <Text style={{fontSize:15 , textAlign:'center', margin:5}}>
                  {this.state.name}
                </Text>
              </View>

                  {
                    this.state.showRemedy &&
                    <RemedyPage name={ this.state.name} />
                  }


                </View>
           

                <Button style={{ paddingTop : 10 }} title="Close" onPress={() => {
                    this.setModalVisible(!this.state.predicted);
                  }}
                />
                <Button title="Show Tips/Remedy" onPress={() => {
                    this.setState( { showRemedy : true } );
                  }}
                />
                <Button title="Go to Forum" 
                onPress={()=>this.props.navigation.navigate("forum")}
                />                

            <Button title="Close" onPress={() => {
                this.setModalVisible(!this.state.predicted);
              }}
            />

              </View>
            </View>
          </Modal>

        </View>
                  <Text>Crop of group {group}</Text>
        
        <Button title="Take Photo" onPress={this.getPhotos} />
        
        {
           this.state.uri != false &&
           <Image style={{ alignContent : 'center' , width: 400, height: 400 }}
                  source={{ uri : this.state.uri }}
           />
        }
        <Button title="Result Of Predicted Disease" onPress={() => this.classifyImage(this.state.path)}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonStyle : {
    marginTop: 10,
    paddingTop : 10,
    width : 50
  }
});