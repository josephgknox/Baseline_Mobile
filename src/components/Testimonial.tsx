// Testimonial Component

import React from 'react';
import { Image, Text, View, ImageSourcePropType } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

interface TestimonialProps {
  imageSource: ImageSourcePropType;
  quote: string;
  byline: string;
}

const Testimonial = ({ imageSource, quote, byline }: TestimonialProps) => {
  return (
    <View className="flex flex-col items-center justify-center">
      <Image
        source={imageSource}
        className="w-[150px] h-[150px] rounded-full mb-5"
      />
      <FontAwesomeIcon icon={faQuoteLeft} size={50} color='indigo' />
      <Text className="text-black text-lg font-medium text-center italic">{quote}</Text>
      <Text className="text-gray-500 text-sm text-center mt-2">{byline}</Text>
    </View>
  );
};

export default Testimonial;