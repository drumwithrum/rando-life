import { createStyles } from '@material-ui/core';
import background from 'images/background4.jpg';

export default theme => createStyles({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundImage: `linear-gradient(to bottom, rgba(232, 203, 192, 0.5), rgba(99, 112, 164, 0.8)), url('${background}')`,
    backgroundSize: 'cover',
  },
  header: {
    textAlign: 'center',
    marginTop: '50px',
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
    height: '20%',
    color: 'white',
  }
});
