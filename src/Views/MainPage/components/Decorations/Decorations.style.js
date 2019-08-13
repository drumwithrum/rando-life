import { createStyles } from '@material-ui/core';

const basic = () => ({
  borderRadius: '50%',
  position: 'absolute',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  zIndex: '1',
});
export default () => createStyles({
  circle: {
    width: '125px',
    height: '125px',
    bottom: '0%',
    left: '-2%',
    backgroundImage: 'linear-gradient(to top right, #6370A4, #6370A4, #98A4DB, #E9EFFF)',
    animationName: '$move',
    animationDuration: '6s',
    ...basic(),
  },
  circle2: {
    width: '70px',
    height: '70px',
    bottom: '18%',
    left: '3%',
    backgroundImage: 'linear-gradient(to top right, #FFB43C, #FFB88E, #FAE4DC)',
    animationName: '$movement',
    animationDuration: '7s',
    ...basic(),
  },
  circle3: {
    width: '80px',
    height: '80px',
    bottom: '18%',
    right: '-2%',
    backgroundImage: 'linear-gradient(to bottom right, #55774A, #64B450, #DFF8D5)',
    animationName: '$move',
    animationDuration: '7s',
    ...basic(),
  },
  circle4: {
    width: '150px',
    height: '150px',
    bottom: '0%',
    right: '1%',
    backgroundImage: 'linear-gradient(to bottom left, #FAEDF9, #EC82A8, #A0769F)',
    animationName: '$movement',
    animationDuration: '9s',
    ...basic(),
  },
  circle5: {
    width: '50px',
    height: '50px',
    bottom: '30%',
    right: '1%',
    backgroundImage: 'linear-gradient(to top right, #FFB43C, #FFB88E, #FAE4DC)',
    animationName: '$movement',
    animationDuration: '8s',
    ...basic(),
  },
  circle6: {
    width: '40px',
    height: '40px',
    bottom: '26%',
    left: '-1%',
    backgroundImage: 'linear-gradient(to bottom left, #FAEDF9, #EC82A8, #A0769F)',
    animationName: '$move',
    animationDuration: '4s',
    ...basic(),
  },
  circle7: {
    width: '20px',
    height: '20px',
    bottom: '30%',
    left: '4%',
    backgroundImage: 'linear-gradient(to bottom right, #55774A, #64B450, #DFF8D5)',
    animationName: '$movement',
    animationDuration: '8s',
    ...basic(),
  },
  circle8: {
    width: 30,
    height: 30,
    bottom: '3%',
    right: '-2%',
    backgroundImage: 'linear-gradient(to top right, #6370A4, #6370A4, #98A4DB, #E9EFFF)',
    animationName: '$move',
    animationDuration: '5s',
    ...basic(),
  },
  '@keyframes move': {
    '0%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-5px)',
    },
    '100%': {
      transform: 'translateY(0px)',
    },
  },
  '@keyframes movement': {
    '0%': {
      transform: 'translateY(0px)',
    },
    '25%': {
      transform: 'translateY(-3px)',
    },
    '50%': {
      transform: 'translateY(-1px)',
    },
    '75%': {
      transform: 'translateY(-6px)',
    },
    '100%': {
      transform: 'translateY(0px)',
    },
  },
});
