import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(() =>
  createStyles({
    btnAdd: {
      backgroundColor: "#58b368",
      color: "white",
      marginRight: "10px",
      '&:hover': {
        backgroundColor: "#8FCB99",
      }
    },
    btnEdit: {
      backgroundColor: "#f3a953",
      color: "white",
      marginRight: "10px",
      '&:hover': {
        backgroundColor: "#F2CCA1",
      }
    },
    btnDelete: {
      backgroundColor: "#c72c41",
      color: "white",
      marginRight: "10px",
      '&:hover': {
        backgroundColor: "#D97280",
      }
    }
  }),
);

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div>
      <Fab size="medium" aria-label="Add" className={classes.btnAdd}>
        <AddIcon />
      </Fab>
      <Fab size="medium" aria-label="Edit" className={classes.btnEdit}>
        <EditIcon />
      </Fab>
      <Fab size="medium" aria-label="Delete" className={classes.btnDelete}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}