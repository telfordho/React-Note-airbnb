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
export const noteRemove = (value, id) => ({
  type: 'REMOVE_NOTE_VALUE',
  value,
  id,
});

export const START_REVISE_NOTE = 'START_REVISE_NOTE';
export const noteReviseStart = (value, id) => ({
  type: 'START_REVISE_NOTE',
  value,
  id,
});

export const TRACK_REVISE_NOTE = 'TRACK_REVISE_NOTE';
export const noteReviseTrack = (value, id) => ({
  type: 'TRACK_REVISE_NOTE',
  value,
  id,
});

export const ACCEPT_REVISE_NOTE_VALUE = 'ACCEPT_REVISE_NOTE_VALUE';
export const noteReviseAccept = id => ({
  type: 'ACCEPT_REVISE_NOTE_VALUE',
  id,
});

export const REJECT_REVISE_NOTE_VALUE = 'REJECT_REVISE_NOTE_VALUE';
export const noteReviseReject = id => ({
  type: 'REJECT_REVISE_NOTE_VALUE',
  id,
});
