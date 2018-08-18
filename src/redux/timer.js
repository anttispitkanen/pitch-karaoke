// timer reducer

/**
 * Actions
 */
const TIMER_TOGGLE_USE = 'TIMER_TOGGLE_USE';
const TIMER_RESET = 'TIMER_RESET';
const TIMER_SET_TIME = 'TIMER_SET_TIME';
const TIMER_DECREASE = 'TIMER_DECREASE';

export const timerToggleUse = () => ({
  type: TIMER_TOGGLE_USE,
});
export const timerReset = () => ({
  type: TIMER_RESET,
});
export const timerSetTime = time => ({
  type: TIMER_SET_TIME,
  payload: time,
});
export const timerDecrease = () => ({
  type: TIMER_DECREASE,
});

/**
 * Reducer
 */
const initialState = {
  timerUsed: true,
  seconds: 120,
  currentSeconds: 120,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TIMER_TOGGLE_USE:
      return {
        ...state,
        timerUsed: !state.timerUsed,
      };
    case TIMER_RESET:
      return {
        ...state,
        currentSeconds: state.seconds,
      };
    case TIMER_SET_TIME:
      return {
        ...state,
        seconds: action.payload,
        currentSeconds: action.payload,
      };
    case TIMER_DECREASE: {
      if (state.currentSeconds <= 0) {
        return state;
      } else {
        return {
          ...state,
          currentSeconds: state.currentSeconds - 1,
        };
      }
    }
    default:
      return state;
  }
}
