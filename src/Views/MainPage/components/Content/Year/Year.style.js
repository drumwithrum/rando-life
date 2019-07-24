import { createStyles } from '@material-ui/core';

export default () => createStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  textField: {
    width: '25%',
    borderRadius: '5px',
  },
});
