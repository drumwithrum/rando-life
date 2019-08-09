import { createStyles } from '@material-ui/core';
import background from 'images/background4.jpg';


export const gradient = (colorPale) => {
  return {
    backgroundSize: 'cover',
    backgroundImage: `linear-gradient(to bottom, ${colorPale}, rgba(236, 130, 168, 0.2))`,
  };
};

export default theme => createStyles({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
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
    marginBottom: '50px',
  },
  mainContainer: {
    boxSizing: 'border-box',
    backgroundColor: 'rgba(250, 250, 250, 0.8)',
    margin: 'auto',
    height: '90%',
    padding: '40px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '5px',
    zIndex: '5',
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
