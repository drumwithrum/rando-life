import { TEST } from './types';

const initialState = {
  testowo: ':)',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        testowo: 'hehe',
      };
    default:
      return state;
  }
};
