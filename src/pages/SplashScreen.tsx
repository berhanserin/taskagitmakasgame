import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Light from '@/assets/light.svg';
import Dark from '@/assets/darj.svg';
import {useColorScheme} from 'nativewind';
import {ProfileProps} from '@/types/navigations';

const SplashScreen = ({navigation}: ProfileProps) => {
  const {toggleColorScheme, colorScheme} = useColorScheme();
  return (
    <SafeAreaView className="flex flex-1 bg-[#D9D9D9] dark:bg-[#353535] justify-center items-center">
      <View className="absolute right-1 top-10">
        <TouchableOpacity
          onPress={() => {
            toggleColorScheme();
          }}>
          {colorScheme !== 'dark' ? (
            <Light height={32} width={32} />
          ) : (
            <Dark height={32} width={32} />
          )}
        </TouchableOpacity>
      </View>
      <View className="items-center">
        <Text className="text-[#070A52] dark:text-[#BEBFD1] font-bold text-2xl">
          Taş, kağıt ve makas oyunu oyna
        </Text>
        <TouchableOpacity
          className="bg-red-500 rounded-2xl dark:bg-[#2751A3]"
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Games');
          }}>
          <Text className="text-white mx-11 my-7 font-bold text-2xl">
            Başlat
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
