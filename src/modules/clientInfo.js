const SET_CLIENT_INFO = "counter/SET_CLIENT_INFO";

export const setClientInfo = (name, gender, date) => ({
  type: SET_CLIENT_INFO,
  name,
  gender,
  date,
});

const initialState = {
  name: "",
  gender: "",
  date: "",
};

export default function clientInfo(state = initialState, action) {
  switch (action.type) {
    case SET_CLIENT_INFO:
      return {
        ...state,
        name: action.name,
        gender: action.gender,
        date: action.date,
      };

    default:
      return state;
  }
}
