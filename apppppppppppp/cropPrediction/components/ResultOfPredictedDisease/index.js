import React, { Component } from 'react';
import { View, Text,Button, PermissionsAndroid} from 'react-native';
import ImagePicker from "react-native-image-picker";
import {TFLiteImageRecognition} from 'react-native-tensorflow-lite';


export default class ResultOfPredictedDisease extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path : false,
      resultObj : {}
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
                name: "Name: " + results[0].name,  
                confidence: "Confidence: " + results[0].confidence, 
                inference: "Inference: " + results[0].inference + "ms"
            };
      console.log(resultObj)      
      this.setState(resultObj)
        
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

  getPhotos = async () => {
    ImagePicker.showImagePicker({}, response => {
      // console.warn(response.path)
      // console.log(response.uri);
      this.setState({
        path : response.path
      });
      
    });
};  

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button title="Take Photo" onPress={this.getPhotos} />
        <Button title="Result Of Predicted Disease" onPress={() => this.classifyImage(this.state.path)}></Button>
      </View>
    );
  }
}
