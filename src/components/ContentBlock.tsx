// ContentBlock.tsx

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
  backgroundColor?: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, subtitle, body, subtitleAlignment = 'text-center', titleAlignment = 'text-center', bodyAlignment = 'text-left', subtitleColor = 'text-indigo-900', backgroundColor = 'bg-gray-200' }) => {
  return (
    <View className={`${backgroundColor} p-5`}>
      <Text className={`${subtitleAlignment} ${subtitleColor} font-bold`}>{subtitle}</Text>
      <Text className={`${titleAlignment} text-black text-lg font-bold mb-1`}>{title}</Text>
      <Text className={`${bodyAlignment}`}>{body}</Text>
    </View>
  );
};

export default ContentBlock;