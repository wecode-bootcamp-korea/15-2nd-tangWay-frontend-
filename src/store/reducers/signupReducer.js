const signupReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default signupReducers;

const INITIAL_STATE = { MESSAGE: "", EMAIL: "", NAME: "" };
