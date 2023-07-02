
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import Splash from './components/splash';
import SignIn from './components/signIn';
import Loading from './components/loading';
import Home from './components/home';
import BottomNavigation from './components/navigation/bottom-navigation';
import MyStack from './routes/StackNavigator';
import CreateDatabase from './database/database';

const App = () => {
  return (

   
    <View style={{flex: 1}}><MyStack /></View>
  )
}


export default App;
