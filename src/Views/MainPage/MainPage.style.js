import { createStyles } from '@material-ui/core';
import background from 'images/background4.jpg';

export default theme => createStyles({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundImage: `linear-gradient(to bottom, rgba(232, 203, 192, 0.5), rgba(99, 112, 164, 0.8)), url('${background}')`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    marginTop: '40px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '50px',
    color: 'white',
  },
  buttonsContainer: {
    textAlign: 'center',
    // backgroundColor: 'black',
    display: 'block',
    width: '100%',
    color: 'white',
  },
  mainContainer: {
    boxSizing: 'border-box',
    backgroundColor: 'rgba(250, 250, 250, 0.5)',
    margin: 'auto',
    height: '65%',
    padding: '40px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    borderRadius: '5px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
  },
});
