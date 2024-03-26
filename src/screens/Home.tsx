// Home Screen

import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Linking, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { cssInterop } from 'nativewind';
import { firebase_auth } from '../config/firebase';

type HomeProps = {
  navigation: NativeStackNavigationProp<any>;
}

const Home = ({ navigation }: HomeProps) => {

  // For opening/handling external links
  const handleExternalLink = async (url: string) => {
    await Linking.openURL(url);
  }

  return (
    <SafeAreaView className="flex-1 relative">
      <ScrollView className="flex-1">
        <View className="flex-1 bg-white px-4">
          <View className="mt-5">
            <Text className="text-3xl font-black mb-3">Welcome to the Baseline Mobile Pattern Library</Text>
            <Text>Baseline Mobile is a design and development system for the Golden State Warriors and its affiliates. This library includes a browsable collection of design patterns that can be used in any Golden State Warriors project.</Text>
          </View>
          <View className="mt-5">
            <TouchableOpacity
              className="bg-black p-5 rounded-md"
              accessibilityLabel="Learn more about available Baseline Mobile components"
              onPress={() => navigation.navigate('Components')}
            >
              <Text className="text-white text-lg font-bold text-center">Components</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-black p-5 mt-3 rounded-md"
              accessibilityLabel="Source code for Baseline Mobile"
              onPress={() => handleExternalLink('https://github.com/josephgknox/Baseline_Mobile/')}
            >
              <Text className="text-white text-lg font-bold text-center">Source Code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 p-4">
        <Button
          onPress={() => firebase_auth.signOut()}
          title="Logout"
          color="#003399"
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;