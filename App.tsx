import "./src/styles/global.css";

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Auth,
  Home,
  Components,
} from './src/screens/Screens';

type RootStackParamList = {
  Home: undefined;
  Auth: undefined;
  Components: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Baseline Mobile' }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Components"
          component={Components}
          options={{ title: 'Components' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
