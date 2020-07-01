import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Tabs from './tabs';
import Gurdwara from '../page/gurdwara';
import Baanis from '../page/baanis';
import Search from '../page/search';
import Nitnem from '../page/nitnem';
import Sggs from '../page/sggs';
import Profile from '../page/profile';
import Detail from '../page/detail';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = "Home"
        screenOptions = {{
          headerTitleAlign : "center",
          ...TransitionPresets.SlideFromRightIOS,
          headerStyle : {
            shadowColor : "transparent",
            elevation : 0
          }
        }}
      >
        <Stack.Screen name="Gurdwara" component={Gurdwara} />
        <Stack.Screen name="Sggs" component={Sggs} />
        <Stack.Screen name="Baanis" component={Baanis} />
        <Stack.Screen name="Nitnem" component={Nitnem} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Detail" component={Detail} options={({ route }) => ({ title: route.params.name })}/>
        <Stack.Screen name="Home" component={Tabs} options={{
          headerShown : false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;