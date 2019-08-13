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
    marginTop: 77,
  },
  gridBot: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '20px 40px',
    border: '1px solid rgba(100, 180, 80, 0.2)',
    borderRadius: '5px',
  },
  text: {
    fontSize: '24px',
    color: 'rgba(100, 180, 80, 0.9)',
  },
  button: {
    width: '25%',
    marginBottom: '40px',
  },
});
