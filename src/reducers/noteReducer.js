import {
  TRACK_ADD_NOTE,
  ADD_NOTE_VALUE,
  REMOVE_NOTE_VALUE,
  // REVISE_NOTE_VALUE
} from '../actions/noteAction';

const initialState = {
  noteTmp: '',
  notes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRACK_ADD_NOTE:
      return {
        ...state,
        noteTmp: action.value,
      };

    case ADD_NOTE_VALUE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            value: state.noteTmp,
            status: 'viewing',
          },
        ],
        noteTmp: '',
      };

    case REMOVE_NOTE_VALUE:
      return {
        state: state.filter((note, id) => id !== action.id),
      };

      // case TRACK_REVISE_NOTE:
      //   return {
      //     ...state,
      //     state: state.notes.map((note, id) => {
      //       if (id === action.id) {
      //         return {
      //           ...note,
      //           noteTmp: action.value,
      //         };
      //       }
      //       return note;
      //     }),
      //   };

      // case START_REVISE_NOTE:
      //   return {
      //     state: state.notes.map((note,id) => {
      //       if (id === action.id) {
      //         return {
      //           ...note,
      //           status: 'editing',
      //         };
      //       }
      //       return note;
      //     }),
      //   };

      // case ACCEPT_REVISE_NOTE_VALUE:
      //   return {
      //     state: state.notes.map((note,id) => {
      //       if (id === action.id) {
      //         return {
      //           ...note,
      //           value: note.noteTmp,
      //           noteTmp: null,
      //           status: 'viewing',
      //         };
      //       }
      //       return note;
      //     }),
      //   };

      // case REJECT_REVISE_NOTE_VALUE:
      //   return {
      //     state: state.notes.map((note, id) => {
      //       if (id === action.id) {
      //         return {
      //           ...note,
      //           noteTmp: null,
      //           status: 'viewing',
      //         };
      //       }
      //       return note;
      //     }),
      //   };

    default:
      return state;
  }
};
