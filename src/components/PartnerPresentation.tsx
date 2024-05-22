// Partner Presentation Component

import React from 'react';
import { Image, Text, View, ImageSourcePropType } from 'react-native';

interface PartnerPresentationProps {
  partnerLogo: ImageSourcePropType;
}

const PartnerPresentation = ({ partnerLogo }: PartnerPresentationProps) => {
  return (
    <View className='my-3 flex-row items-center justify-center'>
      <Text className='text-muted text-sm mr-2'>Presented by</Text>
      <Image
        source={partnerLogo}
        className='h-[20px] w-[80px]'
      />
    </View>
  );
};

export default PartnerPresentation;
