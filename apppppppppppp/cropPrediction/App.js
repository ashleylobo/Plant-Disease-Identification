/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button, Item, Input, Icon } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator, createAppContainer,  createDrawerNavigator} from "react-navigation";

import LoginSignUp from './components/LoginSignUp';
import Forum from './components/Forum';
import CropSelectionPage from './components/CropSelectionPage';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
import InfoAndSelectImage from './components/InfoAndSelectImage';   //rename ur calss and folder path
import ResultOfPredictedDisease from './components/ResultOfPredictedDisease'; //rename ur calss and folder path
import YieldPrediction from './components/YieldPrediction';
import CropDetailPage from './components/CropDetailPage';
import AnswersToQuestions from './components/AnswersToQuestions';
import ForumQuery from './components/ForumQuery';

//-----------------------Drawer navigation Bar ---------------------------------------

const Mdn = createDrawerNavigator({
  cropSelectionPage:{screen:CropSelectionPage},

  loginSignUp:{screen:LoginSignUp},

  cropDetailPage:{screen:CropDetailPage},
  homePage:{screen:HomePage},
  loginSignUp:{screen:LoginSignUp},
  forum:{screen:Forum},
  infoAndSelectImage:{screen:InfoAndSelectImage},
  resultOfPredictedDisease:{screen:ResultOfPredictedDisease},
  yieldPrediction:{screen:YieldPrediction},
  answersToQuestions:{screen:AnswersToQuestions},
  forumQuery:{screen:ForumQuery}
},
{
  contentComponent: SideBar,
},
)

//-----------------------Main App navigation ---------------------------------------


const AppNavigator = createStackNavigator({
  
   profile: Mdn,

  },
  {
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft:(
        <FontAwesome5 name={"bars"} brand style={{paddingLeft:15 , fontSize: 30, color:'white'}} onPress={() => navigation.toggleDrawer()}/>
      ),
      title:("Farmitra"),
      headerTitleStyle: {
        textAlign:'center',
        justifyContent:'center',
        alignSelf:'center',
        alignContent:'center',
        fontWeight: "bold",
        fontSize:30,
        color: "white",
        
        alignSelf: 'center',
      },
      headerStyle: {
        borderBottomColor:"white",
        borderBottomWidth:1,
        backgroundColor: "#0c420c"
      }
    };
  }
});

export default createAppContainer(AppNavigator);