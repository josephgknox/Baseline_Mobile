// Hero Component

import React from 'react';
import { View, Text, ImageBackground, ImageSourcePropType } from 'react-native';

interface HeroProps {
  imageSource: ImageSourcePropType;
  title: string;
  subtitle: string;
  titleColor?: string;
  subtitleColor?: string;
}

const Hero = ({ imageSource, title, subtitle, titleColor = 'text-white', subtitleColor = 'text-white' }: HeroProps) => {
  return (
    <ImageBackground
      source={imageSource}
      className='w-full h-[300px]'
    >
      <View className='flex-1 justify-center items-center'>
        <Text className={`${titleColor} text-4xl font-bold`}>{title}</Text>
        <Text className={`${subtitleColor} text-xl mt-2`}>{subtitle}</Text>
      </View>
    </ImageBackground>
  );
};

export default Hero;