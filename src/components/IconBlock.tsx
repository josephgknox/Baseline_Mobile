// Icon Block Component

import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IconBlockProps {
  icon: IconProp;
  title: string;
  description: string;
  borderColor?: string;
  iconSize?: number;
  iconColor?: string;
}

const IconBlock = ({ icon, title, description, borderColor = 'border-gray-200', iconSize = 50, iconColor = 'indigo' }: IconBlockProps) => {
  return (
    <View className={`border-solid border-2 ${borderColor} rounded-md p-5 mb-5 flex flex-col items-center justify-center`}>
      <FontAwesomeIcon icon={icon} size={iconSize} color={iconColor}/>
      <Text className='text-black text-lg font-bold mb-1'>{title}</Text>
      <Text className='text-black'>{description}</Text>
    </View>
  );
};

export default IconBlock;
