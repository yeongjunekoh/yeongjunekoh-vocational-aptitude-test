const SET_CLIENT_INFO = "counter/SET_CLIENT_INFO";

export const setClientInfo = (name, gender) => ({
  type: SET_CLIENT_INFO,
  name,
  gender,
});

const initialState = {
  name: "",
  gender: "",
};

export default function clientInfo(state = initialState, action) {
  switch (action.type) {
    case SET_CLIENT_INFO:
      return {
        ...state,
        name: action.name,
        gender: action.gender,
      };

    default:
      return state;
  }
}
