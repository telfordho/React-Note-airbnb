import { ADD_NOTE_VALUE, REMOVE_NOTE_VALUE, REVISE_NOTE_VALUE } from '../actions/noteAction';

const initialState = {
  initLoading: true,
  loading: false,
  data: [],
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE_VALUE:
      return {
        state: [
          ...state,
          action.value,
        ],
      };
    case REMOVE_NOTE_VALUE:
      return {
        state: state.filter(note => note.id !== action.id),
      };
    case REVISE_NOTE_VALUE:
      return {
        state: state.map((note) => {
          if (note.id === action.id) {
            return action.value;
          }
          return note;
        }),
      };
    default:
      return state;
  }
};
