import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteButton = () => (
		<IconButton aria-label="delete">
          <DeleteIcon fontSize="small" />
        </IconButton>);

export default DeleteButton;