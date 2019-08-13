import { createStyles } from '@material-ui/core';

export default () => createStyles({
  button: {
    width: '22%',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    borderRadius: '10px',
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxSizing: 'border-box',
    textAlign: 'center',
    paddingTop: '8px',
    width: 40,
    height: 40,
  },
});
