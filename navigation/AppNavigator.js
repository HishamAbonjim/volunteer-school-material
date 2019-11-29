import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import ClassesScereen from '../screens/ClassesScreen'
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Classes:ClassesScereen, 
    Main: MainTabNavigator, 

  }, 
  { 
    initialRouteName:"Classes"
  }
   )
);
