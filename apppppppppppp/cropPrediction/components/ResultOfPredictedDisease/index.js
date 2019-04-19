import React, { Component } from 'react';
import { Modal, View, StyleSheet,Text,Button, Image,PermissionsAndroid,Dimensions} from 'react-native';
import ImagePicker from "react-native-image-picker";
import {TFLiteImageRecognition} from 'react-native-tensorflow-lite';
import Dialog, { DialogContent,DialogTitle } from 'react-native-popup-dialog';
import Instructions from '../Instructions'
export default class ResultOfPredictedDisease extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path : false,
      uri : false,
      resultObj : {},
      predicted : false,
      visible:true
    };

    try {
      // Initialize Tensorflow Lite Image Recognizer
      this.classifier = new TFLiteImageRecognition({
        model: 'cropfive.tflite',  // Your tflite model in assets folder.
        labels: 'label.txt' // Your label file
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
    dialogTitle={<DialogTitle style={{backgroundColor:"#c8cace"}} title="Dos            Don't" />}
    
      height="75%"
    onTouchOutside={() => {
      this.setState({ visible: false });
    }}
    style={{flex:1,flexWrap:'wrap'}}
  >
    <DialogContent  style={{flex:1,flexWrap:'wrap'}} >
    <Instructions style={{flex:1,flexWrap:'wrap'}} ></Instructions>
    </DialogContent>
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

                  <View style={{alignSelf:'center',borderRadius:5 ,width:Dimensions.get('window').width-150, borderWidth:1 , color:'#dbdbdb',margin:10}}>
                    <Text style={{fontSize:25 , textAlign:'center'}}>Accuracy</Text>
                    <Text style={{fontSize:15 , textAlign:'center', margin:5}}>
                    {this.state.confidence}
                    </Text>
                  </View>

                  <View style={{alignSelf:'center',borderRadius:5 ,width:Dimensions.get('window').width-150, borderWidth:1 , color:'#dbdbdb',margin:10}}>
                    <Text style={{fontSize:25 , textAlign:'center'}}>Time Inference</Text>
                    <Text style={{fontSize:15 , textAlign:'center', margin:5}}>
                      {this.state.inference}
                    </Text>
                  </View>    
                </View>

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
});