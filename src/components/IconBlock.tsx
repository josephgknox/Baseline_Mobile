// IconBlock.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IconBlockProps {
  icon: IconProp;
  title: string;
  description: string;
  iconSize?: number;
  iconColor?: string;
}

const IconBlock: React.FC<IconBlockProps> = ({ icon, title, description, iconSize = 50, iconColor = 'indigo' }) => {
  return (
    <View className='border-solid border-4 border-indigo-900 rounded-md p-5 mb-5 flex flex-col items-center justify-center'>
      <FontAwesomeIcon icon={icon} size={iconSize} color={iconColor}/>
      <Text className='text-black text-lg font-bold mb-1'>{title}</Text>
      <Text className='text-black'>{description}</Text>
    </View>
  );
};

export default IconBlock;