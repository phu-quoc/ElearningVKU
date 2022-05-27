import {ToastAndroid} from 'react-native';
import {ADD_TOPIC, GET_TOPICS} from '../actions/topicActions';

const initialState = {
  topics: [],
};
const topicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOPIC:
      ToastAndroid.showWithGravity(
        'Tạo chủ đề thành công!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      const topics = state.topics
      return {
        ...state,
        topics: topics.concat(action.payload),
      };
    case GET_TOPICS:
      return {
        ...state,
        topics: action.payload,
      };
    default:
      return state;
  }
};

export default topicsReducer;
