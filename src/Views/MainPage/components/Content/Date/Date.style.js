import { createStyles } from '@material-ui/core';

export default () => createStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: '24px',
  },
  textField: {
    width: '25%',
    borderRadius: '5px',
  },
  button: {
    width: '25%',
    marginBottom: '40px',
    padding: '1.87%',
  },
});
