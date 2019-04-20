import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text , Button } from 'native-base'
import t from 'tcomb-form-native';
import ImagePicker from "react-native-image-picker";

var work = t.enums({
    Apple : "Apple",
    Potato : "Potato" ,
    Strawberry : "Strawberry" ,
    Tomato : "Tomato" ,
    Corn : "Corn" ,
    Grape : "Grape" ,
    Pepper : "Pepper" ,
    Others : "Others"
})

const fund = t.struct({
    qname: t.String,
    type: work,
    question : t.String
  });

const formOption = {
    fields: {
        type :{
            label: "Name of Crop"
        },
        qname :{
            label: "Name"
        },
        question: {
        label: 'Question'
        }
    }
}

const Form = t.form.Form;



export default class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        question : '',
        qname : '',
        type : 'default'
    };
  }

  handleChange = (value) => {
    this.setState({value});
    }

    handleSubmit = () => {
        const value = this._form.getValue();
    }

  render() {
    return (
      <View style={ styles.container }>

            <Form 
                        type={ fund }
                        value={ this.state.value }
                        onChange={ this.handleChange }
                        options={formOption}
                        ref={c => this._form = c} 
            />


            <Button rounded full
                        onPress={ this.handleSubmit }
                        >
                        <Text style={ styles.text } > Submit </Text>
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