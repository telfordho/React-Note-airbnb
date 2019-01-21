export const TRACK_ADD_NOTE = 'TRACK_ADD_NOTE';
export const noteAddTrack = value => ({
  type: 'TRACK_ADD_NOTE',
  value,
});

export const ADD_NOTE_VALUE = 'ADD_NOTE_VALUE';
export const noteAdd = () => ({
  type: 'ADD_NOTE_VALUE',
});

export const REMOVE_NOTE_VALUE = 'REMOVE_NOTE_VALUE';
export const noteRemove = id => ({
  type: 'REMOVE_NOTE_VALUE',
  id,
});

export const REVISE_NOTE_VALUE = 'REVISE_NOTE_VALUE';
export const noteRevise = (value, id) => ({
  type: 'REVISE_NOTE_VALUE',
  value,
  id,
});

export const LOAD_MORE_NOTE_VALUE = 'LOAD_MORE_NOTE_VALUE';
export const noteLoadMore = () => ({

})
;