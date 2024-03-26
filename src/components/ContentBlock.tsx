// Content Block Component

import React from 'react';
import { View, Text } from 'react-native';

interface ContentBlockProps {
  subtitle: string;
  title: string;
  body: string;
  subtitleAlignment?: string;
  titleAlignment?: string;
  bodyAlignment?: string;
  subtitleColor?: string;
  titleColor?: string;
  bodyColor?: string;
  backgroundColor?: string;
}

const ContentBlock = ({ title, subtitle, body, subtitleAlignment = 'text-center', titleAlignment = 'text-center', bodyAlignment = 'text-left', subtitleColor = 'text-indigo-900', titleColor = 'text-black', bodyColor = 'text-black', backgroundColor = 'bg-transparent' }: ContentBlockProps) => {
  return (
    <View className={`${backgroundColor} p-5`}>
      <Text className={`${subtitleAlignment} ${subtitleColor} font-bold`}>{subtitle}</Text>
      <Text className={`${titleAlignment} ${titleColor} text-lg font-bold mb-1`}>{title}</Text>
      <Text className={`${bodyAlignment} ${bodyColor}`}>{body}</Text>
    </View>
  );
};

export default ContentBlock;
