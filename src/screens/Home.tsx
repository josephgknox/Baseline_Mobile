// Home Screen

import "../styles/global.css";

import React from 'react';
import { Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeProps = {
  navigation: NativeStackNavigationProp<any>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <Button
      title="Components"
      onPress={() =>
        navigation.navigate('Components')
      }
    />
  );
};

export default Home;
