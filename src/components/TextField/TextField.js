import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class TextFieldItem extends React.Component {
  state = {
    inputValue: ''
  };

  onButtonClick = () => {
    this.setState ({
          inputValue: ''
        });
    if(this.state.inputValue !== '' && this.state.inputValue !== 'Введите задачу' ) {
    this.props.OnClickAdd(this.state.inputValue.toUpperCase())} else {
      this.setState ({
          inputValue: 'Введите задачу'
        });
    }
  }
  
  render() {
    // const {OnClickAdd} = this.props;
    return (<Grid>
    <TextField
      id="filled-full-width"
      style={{ marginTop: 8,
      border: ' 3px solid rgba(245, 0, 87, 1)', 
      borderRadius: '5px' }}
      fullWidth
      value={this.state.inputValue.toUpperCase()}
      onChange={event => this.setState({inputValue: event.target.value})}
    />
    <Button 
        color="secondary"
        onClick={this.onButtonClick}>
        Добавить новую задачу
      </Button>
  </Grid>);
  }
}

export default TextFieldItem;