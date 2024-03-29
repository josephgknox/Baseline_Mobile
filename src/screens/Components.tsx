// Components Screen

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native';
import { Card, ContentBlock, Hero, IconBlock, Scoreboard, Testimonial } from '../components/Components';
import * as solidIcons from "@fortawesome/free-solid-svg-icons";

const Components = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-white dark:bg-black';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className={backgroundStyle}>

        {/* Hero Image */}
        <View>
          <Hero
            imageSource={require('../assets/images/hero-img.png')}
            title={'Image Hero Title'}
            subtitle={'This is a Subtitle of a Hero component'}
          />
        </View>

        <View className='flex-1 px-4'>

          {/* Scoreboard */}
          <View className='mt-5'>
            <Scoreboard
              warriorsScore={84}
              opponentScore={65}
              opponentName={'Nuggets'}
              opponentLogo={require('../assets/images/nuggets-logo.png')}
              quarter={'Q3'}
              timeRemaining={'11:23'}
              broadcast={'NBC Sports'}
            />
          </View>

          {/* Card */}
          <View className='mt-5'>
            <Card
              title={'Card Title'}
              description={'This is a Description of a Card component.'}
            />
          </View>

          {/* Horizontal Scroll of Cards */}
          <ScrollView horizontal={true} className='mt-5'>
            <View className="w-64 mr-5">
              <Card
                title={'Card Title'}
                description={'This is a Description of a Card component.'}
                titleColor={'text-white'}
                descriptionColor={'text-white'}
                backgroundColor={'bg-indigo-900'}
              />
            </View>
            <View className="w-64 mr-5">
              <Card
                title={'Card Title'}
                description={'This is a Description of a Card component.'}
              />
            </View>
            <View className="w-64 mr-5">
              <Card
                title={'Card Title'}
                description={'This is a Description of a Card component.'}
              />
            </View>
          </ScrollView>

          {/* Icon Block */}
          <View className='my-5 last:-mb-0'>
            <IconBlock
              icon={solidIcons.faCoffee}
              title={'Icon Block Title'}
              description={'This is the Description of an Icon Block.'}
            />
            <IconBlock
              icon={solidIcons.faBolt}
              title={'Icon Block Title'}
              description={'This is the Description of an Icon Block.'}
            />
          </View>

          {/* Content Block */}
          <View className='mb-5'>
            <ContentBlock
              subtitle={'Subtitle'}
              title={'Content Block Title'}
              body={'This is the Body of a Content Block where body content will be displayed.'}
              backgroundColor={'bg-gray-200'}
            />
          </View>

          {/* Testimonial */}
          <View className='mb-5'>
            <Testimonial
              imageSource={require('../assets/images/person.png')}
              quote={'This is the Quote of a Testimonial component where the content of the testimonial with be displayed.'}
              byline={'Testimonial Byline'}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Components;
