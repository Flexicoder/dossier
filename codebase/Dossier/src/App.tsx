/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './pages/Home';
import DocumentsPage from './pages/Documents';
import KeyInfoPage from './pages/KeyInfo';
import CalendarPage from './pages/Calendar';
import SymptomsPage from './pages/Symptoms';

declare const global: {HermesInternal: null | {}};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Calendar" component={CalendarPage} />
        <Tab.Screen name="Documents" component={DocumentsPage} />
        <Tab.Screen name="Symptoms" component={SymptomsPage} />
        <Tab.Screen name="Key Info" component={KeyInfoPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;