import {Dimensions} from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const HEADER_IMAGE_WIDTH = WINDOW_WIDTH * 0.8;
export const HEADER_IMAGE_HEIGHT = (HEADER_IMAGE_WIDTH * 107) / 600;
