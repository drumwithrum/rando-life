import { createStyles } from '@material-ui/core';

export default () => createStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90%',
    width: '100%',
  },
  gridTop: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  gridBot: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '20px 40px',
    borderRadius: '5px',
    border: '1px solid rgba(255, 180, 60, 0.2)',
  },
  text: {
    fontSize: '24px',
    color: 'rgba(255, 180, 60, 0.9)',
  },
  textField: {
    width: '25%',
    borderRadius: '5px',
  },
});
