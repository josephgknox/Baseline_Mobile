// IconBlock.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee'; // Import specific FontAwesome icon

interface IconBlockProps {
  title: string;
  description: string;
}

const IconBlock: React.FC<IconBlockProps> = ({ title, description }) => {
  return (
    <View className="border-solid border-4 border-indigo-900 rounded-md p-5">
      <FontAwesomeIcon icon={faCoffee} size={ 50 } color={ 'indigo' }/>
      <Text className="text-black text-lg font-bold mb-1">{title}</Text>
      <Text className="text-black">{description}</Text>
    </View>
  );
};

export default IconBlock;