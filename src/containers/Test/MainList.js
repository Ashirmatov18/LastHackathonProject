import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link } from 'react-router-dom';
import classes from './Test.css'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonSizes() {
  const classes = useStyles();

  return (
    <div className = 'testMain'>
      <div>
          <Link to = '/cntest'>
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
          CHINESE TEST
        </Button>
          </Link>
          <Link to = '/engtest'>
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
          ENGLISH TEST
        </Button>

          </Link>
      </div>
    </div>
  );
}
