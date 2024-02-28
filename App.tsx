import "./src/styles/global.css";

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Card from './src/components/Card';
import ContentBlock from './src/components/ContentBlock';
import IconBlock from './src/components/IconBlock';
import * as solidIcons from "@fortawesome/free-solid-svg-icons";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className={backgroundStyle}>
        <View className='flex-1 bg-white'>
          {/* Header */}
          <View className='p-4 bg-black'>
            <Text className='text-white text-lg font-bold'>Joe's App</Text>
          </View>

          {/* Horizontal Scroll of Cards */}
          <ScrollView horizontal={true} className='mt-5 px-4'>
            <Card
              title="Example Card"
              description="This is an example Card component."
              titleColor="text-white"
              descriptionColor="text-white"
              backgroundColor="bg-indigo-900"
            />
            <Card
              title="Example Card"
              description="This is an example Card component."
            />
            <Card
              title="Example Card"
              description="This is an example Card component."
            />
          </ScrollView>
          
          {/* Icon Block */}
          <View className='my-5 last:-mb-0 px-4'>
            <IconBlock
              icon={solidIcons.faCoffee}
              title="Example Icon Block"
              description="This is an example Icon Block component."
            />
            <IconBlock
              icon={solidIcons.faBolt}
              title="Example Icon Block"
              description="This is an example Icon Block component."
            />
          </View>
          
          {/* Content Block */}
          <View className='px-4'>
            <ContentBlock
              subtitle="Subtitle"
              title="Title"
              body="This is an example Content Block component"
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;