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

          {/* Card */}
          <View className=' mt-5 px-4'>
            <Card
              title="Card Title"
              description="This is a Description of a Card component."
            />
          </View>

          {/* Horizontal Scroll of Cards */}
          <ScrollView horizontal={true} className='mt-5 px-4'>
            <View className="w-64 mr-5">
            <Card
              title="Card Title"
              description="This is a Description of a Card component."
              titleColor="text-white"
              descriptionColor="text-white"
              backgroundColor="bg-indigo-900"
            />
            </View>
            <View className="w-64 mr-5">
            <Card
              title="Card Title"
              description="This is a Description of a Card component."
            />
            </View>
            <View className="w-64 mr-5">
            <Card
              title="Card Title"
              description="This is a Description of a Card component."
            />
            </View>
          </ScrollView>

          {/* Icon Block */}
          <View className='my-5 last:-mb-0 px-4'>
            <IconBlock
              icon={solidIcons.faCoffee}
              title="Icon Block Title"
              description="This is the Description of an Icon Block."
            />
            <IconBlock
              icon={solidIcons.faBolt}
              title="Icon Block Title"
              description="This is the Description of an Icon Block."
            />
          </View>

          {/* Content Block */}
          <View className='mb-5 px-4'>
            <ContentBlock
              subtitle="Subtitle"
              title="Content Block Title"
              body="This is the Body of a Content Block where body content will be displayed."
              backgroundColor="bg-gray-200"
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;