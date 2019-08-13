import { createStyles } from '@material-ui/core';

export default () => createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  textField: {
    width: '25%',
    borderRadius: '5px',
    marginBottom: '40px',
  },
  alert: {
    color: 'red',
    fontSize: '14px',
    position: 'absolute',
    zIndex: '10',
    marginTop: '40px',
  },
});
