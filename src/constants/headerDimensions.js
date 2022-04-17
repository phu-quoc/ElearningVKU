import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const HEADER_IMAGE_WIDTH = windowWidth * 0.8;
export const HEADER_IMAGE_HEIGHT = (HEADER_IMAGE_WIDTH * 107) / 600;
