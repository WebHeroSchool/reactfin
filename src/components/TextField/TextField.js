import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextFieldItem = () => (
	 <TextField
          id="filled-full-width"
          label="Добавить новую задачу"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />)

export default TextFieldItem;