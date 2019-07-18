import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    }
  }),
);

export default function NativeSelects() {
  const classes = useStyles();

  const handleChange = () => (
  ) => {
    
  };

  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          native
          onChange={handleChange('age')}
          input={
            <OutlinedInput name="age" />
          }
        >
          <option value={""}>Seçiniz</option>
          <option value={10}>Ekle</option>
          <option value={20}>Sil</option>
          <option value={30}>Düzenle</option>
        </Select>
      </FormControl>
    </div>
  );
}
