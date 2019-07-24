import { createStyles } from '@material-ui/core';
import background from 'images/background4.jpg';


export const gradient = (color) => {
  return {
    backgroundSize: 'cover',
    backgroundImage: `linear-gradient(to bottom, ${color}, rgba(236, 130, 168, 0.2)), url('${background}') `,
  };
};

export default theme => createStyles({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    margin: '2%',
  },
  title: {
    fontSize: '50px',
    color: 'white',
  },
  buttonsContainer: {
    textAlign: 'center',
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
    alignItems: 'center',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(250, 250, 250, 0.2)',
    color: 'white',
    borderRadius: '5px',
  },
});
