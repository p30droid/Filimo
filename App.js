/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Settingcreen from './screens/SettingsScreen';
import CategoryScreen from './screens/CategoryScreen';
import VideoPlayerScreen from './screens/VideoPlayerScreen'
import  VideoCategoryScreen from './screens/VideoCategoryScreen'
import {createStackNavigator} from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();


const HomeStackScreens = ({navigation,route})=>(

  <HomeStack.Navigator>
  <HomeStack.Screen name="Home" component={HomeScreen} options={{title:"Filimo",
  headerStyle: {
    backgroundColor: '#3f51b5',
  }, headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold', alignSelf: 'center'
  },
}}></HomeStack.Screen>
  <HomeStack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} 

options={({ route }) => ({
  headerStyle : {
    backgroundColor : '#3f51b5'
  },
  headerTintColor : '#ffffff',
  title: route.params.title })}

  
  ></HomeStack.Screen>
  </HomeStack.Navigator>
)



const CategoryStackScreens = ({navigation,route})=>(

  <HomeStack.Navigator>
  <HomeStack.Screen name="Home" component={CategoryScreen} options={{title:"Category",
  headerStyle: {
    backgroundColor: '#3f51b5',
  }, headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold', alignSelf: 'center'
  },
}}></HomeStack.Screen>

<HomeStack.Screen name="VideoCategoryScreen" component={VideoCategoryScreen}

options={({ route }) => ({
  headerStyle : {
    backgroundColor : '#3f51b5'
  },
  headerTintColor : '#ffffff',
  title: route.params.title })}
></HomeStack.Screen>


  </HomeStack.Navigator>
)




export default function App() {
  return (
   
   
    <NavigationContainer>
      
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreens} />
        <Tab.Screen name="Category" component={CategoryStackScreens} />
        <Tab.Screen name="Settings" component={Settingcreen} />
      </Tab.Navigator>
      
    </NavigationContainer>


  );
};
