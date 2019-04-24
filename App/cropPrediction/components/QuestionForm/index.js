import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Text , Button } from 'native-base'
import t from 'tcomb-form-native';
import ImagePicker from "react-native-image-picker";
import strings from '../../constants/strings';







const Form = t.form.Form;



export default class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        question : '',
        qname : '',
        type : 'default',
        fund : t.struct({}),
        start : false
    };
  }

  async componentWillMount(){

    await AsyncStorage.getItem('defaultLan', (err, res) => {
    
      if(res != null){

        this.setState({ defaultLan : res })
        console.log("setting lan ", res)
        strings.setLanguage(res);
        this.setState({})

      }
    
    });

  
    this.formOption = {
      fields: {
          type :{
              label: strings.NameOfCrop
          },
          qname :{
              label: strings.Name
          },
          question: {
          label: strings.Question
          }
      }
  }

    var work = t.enums({
          Apple : strings.Apple,
          Potato : strings.Potato ,
          Strawberry :  strings.Strawberry,
          Tomato :  strings.Tomato,
          Corn :  strings.Corn,
          Grape :  strings.Grape,
          Pepper :  strings.Pepper,
          Peach : strings.Peach,
          Others : "Others"
      })

      var fund = t.struct({
        qname: t.String,
        type: work,
        question : t.String
      });

      this.setState({fund , start : true})  

  }



  handleChange = (value) => {
    this.setState({value});
    }

    handleSubmit = () => {
        const value = this._form.getValue();
        console.log(value)
    }

  render() {
    return (
      <View style={ styles.container }>

            {
              this.state.start &&
              <Form 
              type={ this.state.fund }
              value={ this.state.value }
              onChange={ this.handleChange }
              options={this.formOption}
              ref={c => this._form = c} 
              />
            }



            <Button rounded full
                        onPress={ this.handleSubmit }
                        >
                        <Text style={ styles.text } > { strings.Submit } </Text>
            </Button>

      </View>
    );
  }
}



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
      },
    text : {
        fontSize : 25,
        fontWeight: 'bold'
        
    }
});