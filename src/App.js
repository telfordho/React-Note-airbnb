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
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import {
  noteAdd, noteAddTrack, noteRemove, noteRevise,
} from './actions/noteAction';

const styles = theme => ({
  noteContainer: {
    display: 'flex',
    justifyContent: 'center',
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

const editNote = (e) => {
  console.log('Edit');
};

const InsetList = (props) => {
  const { classes, noteReducer, onNoteAddTrack, onNoteAdd} = props;
  return (
    <div className={classes.noteContainer}>
      <List component="nav" className={classes.root}>
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={noteReducer.noteTmp}
          onChange={e => onNoteAddTrack(e.target.value)}
          margin="normal"
        />
        <IconButton onClick={onNoteAdd}>
          <EditIcon />
        </IconButton>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText inset primary="Chelsea Otakan" />
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </ListItem>
        <ListItem button onClick={() => console.log('hohohoho')}>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText inset primary="Eric Hoffman" />
          <IconButton onClick={editNote}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
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
  onNoteRemove: () => dispatch(noteRemove()),
  onNoteRevise: () => dispatch(noteRevise()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(InsetList));
