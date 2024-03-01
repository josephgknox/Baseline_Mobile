// Home Screen

import "../styles/global.css";

import React from 'react';
import {
  View,
  Button,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeProps = {
  navigation: NativeStackNavigationProp<any>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View className='flex-1 bg-white'>
      <Button
        title="Components"
        onPress={() =>
          navigation.navigate('Components')
        }
      />
    </View>
  );
};

export default Home;
