import {
  RESET_BIRD_ANSWER_BLOCK,
  PRESS_BIRD_ANSWER_BUTTON,
} from '../actions/types/action-types';

const initialbirdAnswerBlock = {
  pressedButtons: [],
};

const currentMachineReducer = (state = initialbirdAnswerBlock, { type, payload }) => {
  switch (type) {
    case PRESS_BIRD_ANSWER_BUTTON:
      return {
        ...state,
        pressedButtons: state.pressedButtons.map((el) => {
          if (el.id === payload) {
            const newEl = { ...el, pressed: true };
            return newEl;
          }
          return el;
        }),
      };
    case RESET_BIRD_ANSWER_BLOCK:
      return initialbirdAnswerBlock;
    default:
      return state;
  }
};

export default currentMachineReducer;
