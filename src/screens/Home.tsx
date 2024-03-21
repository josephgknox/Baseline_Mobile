// Home Screen

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
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
    <SafeAreaView>
      <ScrollView>
        <View className='flex-1 bg-white px-4'>

          <View className='mt-5'>
            <Text className='text-lg font-bold mb-1'>Welcome to the Baseline Mobile Pattern Library</Text>
            <Text>Baseline Mobile is a design and development system for the Golden State Warriors and its affiliates. This library includes a browsable collection of design patterns that can be used in any Golden State Warriors project.</Text>
          </View>

          <View className='mt-5'>
            <TouchableOpacity
              className='bg-black p-5 rounded-md'
              accessibilityLabel="Learn more about available Baseline Mobile components"
              onPress={() => navigation.navigate('Components')}>
              <Text className='text-white text-lg font-bold text-center'>Components</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='bg-black p-5 mt-3 rounded-md'
              accessibilityLabel="Learn more about Baseline Mobile authentication"
              onPress={() => navigation.navigate('Auth')}>
              <Text className='text-white text-lg font-bold text-center'>Authentication</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
