import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Home,
  Components,
} from './src/screens/Screens';

type RootStackParamList = {
  Home: undefined;
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
        <Stack.Screen name="Components" component={Components} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
