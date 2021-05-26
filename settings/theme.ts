import {Dimensions} from 'react-native';

export const Metrics: any = {
  ScreenWidth: Dimensions.get('window').width,
  ScreenHeight: Dimensions.get('window').height,
  Padding: 8,
  Margin: 8,
  BorderRadius: 8,
};

export const FontFamily: any = {
  Bold: 'oswald-bold',
  Medium: 'oswald-medium',
  Regular: 'oswald-regular',
};

export const Colors: any = {
  Primary: '#8C1D5E',
  Second: '#E6E36A',
  White: '#FFFFFF',
  Medium: '#CCCCCC',
  VeryDark: '#585858',
  SuperDark: '#3B3B3B',
  Background: '#F7F8F9',
};

export const Shadow: any = {
  shadowColor: Colors.SuperDark,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  elevation: 5,
};

export const FontStyle: any = {
  Title: {
    fontSize: 24,
    fontFamily: FontFamily.Medium,
  },
  Subtitle: {
    fontSize: 18,
    fontFamily: FontFamily.Medium,
  },
  Normal: {
    fontSize: 16,
    fontFamily: FontFamily.Regular,
  },
  NormalBold: {
    fontSize: 16,
    fontFamily: FontFamily.Bold,
  },
  Min: {
    fontSize: 12,
    fontFamily: FontFamily.Regular,
  },
  Big: {
    fontSize: 36,
    fontFamily: FontFamily.Medium,
  },
};
