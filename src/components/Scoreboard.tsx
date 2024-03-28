import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

interface ScoreboardProps {
  warriorsScore: number;
  opponentScore: number;
  opponentName: string;
  opponentLogo: ImageSourcePropType;
  quarter: string;
  timeRemaining: string;
  broadcast: string;
}

const Scoreboard = ({ warriorsScore, opponentScore, opponentName, opponentLogo, quarter, timeRemaining, broadcast }: ScoreboardProps) => {
  return (
    <View className='flex bg-white shadow-md rounded-md py-8 px-5'>
      <View className='flex-row justify-between mb-5'>
        <View className='flex-col items-center'>
          <Image
            source={require('../assets/images/warriors-logo.png')}
            className='w-12 h-12'
          />
          <Text className='text-black font-semibold text-md mt-3'>Warriors</Text>
        </View>
        <View className='flex-col mt-1'>
          <Text className='text-black font-bold text-4xl'>{warriorsScore}</Text>
        </View>
        <View className='flex-col items-center'>
          <Text className='text-red-500 font-bold text-sm'>LIVE</Text>
          <Text className='text-black text-sm'>{quarter}</Text>
          <Text className='text-black text-sm'>{timeRemaining}</Text>
          <Text className='text-black font-semibold'>{broadcast}</Text>
        </View>
        <View className='flex-col mt-1'>
          <Text className='text-black font-bold text-4xl'>{opponentScore}</Text>
        </View>
        <View className='flex-col items-center'>
          <Image
            source={opponentLogo}
            className='w-12 h-12'
          />
          <Text className='text-black font-semibold text-md mt-3'>{opponentName}</Text>
        </View>
      </View>
      <View className='flex-row justify-between items-center'>
        <View className='bg-black rounded-full px-4 py-2 basis-2/3'>
          <Text className='text-white text-sm text-center font-bold p-2'>Game Details</Text>
        </View>
        <View className='bg-black rounded-full p-4'>
          <FontAwesomeIcon icon={faPlay} size={16} color='#FFFFFF' />
        </View>
        <View className='bg-black rounded-full p-4'>
          <FontAwesomeIcon icon={faVolumeUp} size={16} color='#FFFFFF' />
        </View>
      </View>
    </View>
  );
};

export default Scoreboard;
