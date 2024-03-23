import "./src/styles/global.css";

import React from "react";
import { useEffect, useState } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { User, onAuthStateChanged } from "firebase/auth";
import { firebase_auth } from "./src/config/firebase";

import {
  Auth,
  Home,
  Components
} from './src/screens/Screens';

type RootStackParamList = {
  Home: undefined;
  Auth: undefined;
  Components: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(firebase_auth, (user) => {
      setUser(user);
    });
  }, []);

  return (

    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <React.Fragment>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Baseline Mobile', headerShown: true }}
            />
            <Stack.Screen
              name="Components"
              component={Components}
              options={{ title: 'Components', headerShown: true }}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{ title: 'Log In / Sign Up', headerShown: true }}
            />
          </React.Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
