import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Light from '@/assets/light.svg';
import Confity from '@/assets/confety.svg';
import Dark from '@/assets/darj.svg';
import {useColorScheme} from 'nativewind';
import Tas from '@/assets/tas.svg';
import Paper from '@/assets/paper.svg';
import Cut from '@/assets/makas.svg';
import Toast from 'react-native-toast-message';

const Game = () => {
  const {toggleColorScheme, colorScheme} = useColorScheme();

  const [secim, setsecim] = useState(false);

  const [palerSelect, setpalerSelect] = useState(-1);
  const [pcSelect, setpcSelect] = useState(-1);

  const [pcPuan, setpcPuan] = useState(0);
  const [playerPuan, setplayerPuan] = useState(0);

  const [process, setprocess] = useState(false);

  const [success, setSuccess] = useState(false);
  const [berabere, setberabere] = useState(false);
  const [end, setend] = useState(false);
  let sayi1 = 0;
  const Select = async () => {
    setprocess(true);
    if (sayi1 < 50) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          setpcSelect(Math.floor(Math.random() * (2 - 0 + 1)) + 0);
        }, 50);

        setTimeout(() => {
          Select();
        }, 100);
        sayi1 += 1;
      });
    }
    setprocess(false);
    setend(true);
  };

  useEffect(() => {
    if (!process) {
      setberabere(false);

      if (pcSelect == 0 && palerSelect == 1) {
        setSuccess(true);
        setplayerPuan(playerPuan + 1);
      } else if (pcSelect == 1 && palerSelect == 2) {
        setplayerPuan(playerPuan + 1);
        setSuccess(true);
      } else if (pcSelect == 2 && palerSelect == 1) {
        setplayerPuan(playerPuan + 1);
        setSuccess(true);
      } else {
        if (pcSelect === palerSelect) {
          setberabere(true);
        } else {
          setpcPuan(pcPuan + 1);
          setberabere(false);
          setSuccess(false);
        }
      }
    }
  }, [process]);

  useEffect(() => {
    if (palerSelect > -1) {
      Select();
    }
  }, [palerSelect]);

  return (
    <SafeAreaView className="flex flex-1 bg-[#D9D9D9] dark:bg-[#353535]">
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
      <View className="mt-16 justify-center items-center">
        <TouchableOpacity activeOpacity={0.9}>
          <Text className="font-bold text-3xl dark:text-white">
            Turu Sıfırla
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between mt-5">
        <Text className="ml-4 text-base dark:text-white">
          Bilgisayar puanı: {pcPuan}
        </Text>
        <Text className="mr-10 text-base dark:text-white">
          Oyuncu puanı: {playerPuan}
        </Text>
      </View>
      <View className="justify-center items-center mt-24 flex-row">
        {palerSelect > -1 ? (
          <>
            {process ? (
              <>
                <Text className="text-3xl font-bold">
                  <Text className=" text-black dark:text-white">
                    Bilgisayar seçiyor.
                  </Text>
                </Text>
              </>
            ) : (
              <>
                <Text className="text-3xl font-bold">
                  <Text className=" text-black dark:text-white">
                    {berabere
                      ? 'Berabere'
                      : success
                      ? 'Kazanıldı'
                      : 'Kaybedildi.'}
                  </Text>
                </Text>
                {/* <View className="ml-2">
                  <Confity />
                </View> */}
              </>
            )}
          </>
        ) : (
          <>
            <Text className="text-3xl font-bold">
              <Text>Oynamak için seçin.</Text>
            </Text>
          </>
        )}
      </View>
      <View className="items-center mt-14">
        {secim ? (
          <View>
            <View className="flex-row">
              <TouchableOpacity
                className={` ${
                  palerSelect != -1 && palerSelect != 0 ? 'opacity-50' : ''
                }`}
                onPress={() => {
                  if (palerSelect == -1) {
                    setpalerSelect(0);
                  } else {
                    Toast.show({
                      autoHide: true,

                      type: 'error',
                      text1: 'Seçiminizi değiştiremezsiniz',
                    });
                  }
                }}>
                <Tas height={120} />
              </TouchableOpacity>
              <TouchableOpacity
                className={` ${
                  palerSelect != -1 && palerSelect != 1 ? 'opacity-50' : ''
                }`}
                onPress={() => {
                  if (palerSelect == -1) {
                    setpalerSelect(1);
                  } else {
                    Toast.show({
                      autoHide: true,
                      type: 'error',
                      text1: 'Seçiminizi değiştiremezsiniz',
                    });
                  }
                }}>
                <Paper height={120} />
              </TouchableOpacity>
              <TouchableOpacity
                className={` ${
                  palerSelect != -1 && palerSelect != 2 ? 'opacity-50' : ''
                }`}
                onPress={() => {
                  if (palerSelect == -1) {
                    setpalerSelect(2);
                  } else {
                    Toast.show({
                      autoHide: true,
                      type: 'error',
                      text1: 'Seçiminizi değiştiremezsiniz',
                    });
                  }
                }}>
                <Cut height={120} />
              </TouchableOpacity>
            </View>
            {end ? (
              <TouchableOpacity
                className="bg-red-500 dark:bg-[#2751A3] p-10 justify-center items-center mt-4 rounded-full"
                onPress={() => {
                  setSuccess(false);
                  setberabere(false);
                  setpcSelect(-1);
                  setpalerSelect(-1);
                  setend(false);
                }}>
                <Text className="text-white font-bold text-3xl">Sıfırla</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity className="p-10 justify-center items-center mt-4" />
            )}
            <View className="flex-row mt-10">
              <TouchableOpacity
                activeOpacity={1}
                className={` ${
                  pcSelect != -1 && pcSelect != 0 ? 'opacity-50' : ''
                }`}>
                <Tas height={120} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                className={` ${
                  pcSelect != -1 && pcSelect != 1 ? 'opacity-50' : ''
                }`}>
                <Paper height={120} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                className={` ${
                  pcSelect != -1 && pcSelect != 2 ? 'opacity-50' : ''
                }`}>
                <Cut height={120} />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity
            className="bg-red-500 items-center py-5 w-52 rounded-full"
            onPress={() => setsecim(true)}
            activeOpacity={0.9}>
            <Text className="text-white font-bold text-xl">Seçimini yap</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Game;
