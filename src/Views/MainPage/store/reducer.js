import { TEST, CHANGE_COLOR } from './types';

const initialState = {
  testowo: ':)',
  color: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        testowo: 'hehe',
      };
    case CHANGE_COLOR: {
      const { payload } = action;
      return {
        ...state,
        color: { payload },
      };
    }
    default:
      return state;
  }
};

