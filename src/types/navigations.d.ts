import {NavigatorScreenParams} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Games: undefined;
};

export type ProfileProps = NativeStackScreenProps<
  RootStackParamList,
  'Home',
  'Games'
>;
