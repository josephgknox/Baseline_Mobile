// Home Screen

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { cssInterop } from 'nativewind';

type HomeProps = {
  navigation: NativeStackNavigationProp<any>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  // Map Tailwind classes to React Native components using NativeWind's cssInterop function
  cssInterop(TouchableOpacity, {
    className: {
      target: "style",
      nativeStyleToProp: {
      },
    },
  });

  return (
    <View className="flex-1 bg-white">
      <TouchableOpacity
        className="bg-black p-5"
        accessibilityLabel="Learn more about available Baseline Mobile components"
        onPress={() => navigation.navigate('Components')}>
        <Text className="text-white text-lg font-bold text-center">Components</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
