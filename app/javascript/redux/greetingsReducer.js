const GET_GREETINGS = 'GET_GREETINGS';

const greetingsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
}

const getGreeting = () => {
  return async (dispatch) => {
    const response = await fetch('/greetings');
    const greetings = await response.json();

    dispatch({
      type: GET_GREETINGS,
      payload: greetings,
    });
  };
}

export default greetingsReducer;
export { getGreeting };