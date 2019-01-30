import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import {
  noteAdd,
  noteAddTrack,
  noteRemove,
  noteReviseStart,
  noteReviseTrack,
  noteReviseAccept,
  noteReviseReject,
} from './actions/noteAction';

const styles = theme => ({
  noteContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  editContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  addNoteButton: {
    padding: '10px',
    left: '20px',
  },
  root: {
    width: '70%',
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '90%',
  },
});

const InsetList = (props) => {
  const {
    classes,
    noteReducer,
    onNoteAddTrack,
    onNoteAdd,
    onNoteRemove,
    onNoteStartRevise,
    onNoteReviseTrack,
    onNoteReviseAccept,
    onNoteReviseReject,
  } = props;

  return (
    <div className={classes.noteContainer}>

      <List component="nav" className={classes.root}>
        <div className={classes.editContainer}>
          <TextField
            label="Please insert here"
            className={classes.textField}
            value={noteReducer.noteTmp}
            onChange={e => onNoteAddTrack(e.target.value)}
            margin="normal"
          />
          <IconButton className={classes.addNoteButton} onClick={onNoteAdd}>
            <EditIcon />
          </IconButton>
        </div>
        {
          noteReducer.notes.map((note, id) => {
            if (note.status === 'viewing') {
              return (
                <ListItem
                  key={id.toString()}
                  button
                  onClick={() => onNoteStartRevise(note.value, id)}
                >
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={note.value} />
                  <IconButton onClick={(e) => {
                    onNoteRemove(note.value, id);
                    e.stopPropagation();
                  }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              );
            }
            return (
              <ListItem key={id.toString()}>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <TextField
                  label="Please edit"
                  className={classes.textField}
                  value={note.noteTmp}
                  onChange={e => onNoteReviseTrack(e.target.value, id)}
                  margin="normal"
                />
                <IconButton onClick={(e) => {
                  onNoteReviseAccept(id);
                  e.stopPropagation();
                }}
                >
                  <DoneIcon />
                </IconButton>
                <IconButton onClick={(e) => {
                  onNoteReviseReject(id);
                  e.stopPropagation();
                }}
                >
                  <ClearIcon />
                </IconButton>
              </ListItem>
            );
          })
        }
      </List>

    </div>
  );
};

const mapStateToProps = state => ({
  noteReducer: state.noteReducer,
});

const mapDispatchToProps = dispatch => ({
  onNoteAdd: () => dispatch(noteAdd()),
  onNoteAddTrack: value => dispatch(noteAddTrack(value)),
  onNoteRemove: (value, id) => dispatch(noteRemove(value, id)),
  onNoteStartRevise: (value, id) => dispatch(noteReviseStart(value, id)),
  onNoteReviseTrack: (value, id) => dispatch(noteReviseTrack(value, id)),
  onNoteReviseAccept: id => dispatch(noteReviseAccept(id)),
  onNoteReviseReject: id => dispatch(noteReviseReject(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(InsetList));
