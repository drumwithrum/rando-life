import { createStyles } from '@material-ui/core';

export default () => createStyles({
  circle: {
    width: '125px',
    height: '125px',
    borderRadius: '50%',
    bottom: '0%',
    left: '-2%',
    backgroundImage: 'linear-gradient(to top right, #6370A4, #6370A4, #98A4DB, #E9EFFF)',
    position: 'absolute',
    zIndex: '10',
    animationName: '$move',
    animationDuration: '6s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  circle2: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    bottom: '18%',
    left: '3%',
    backgroundImage: 'linear-gradient(to top right, #FFB43C, #FFB88E, #FAE4DC)',
    position: 'absolute',
    animationName: '$movement',
    animationDuration: '7s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  circle3: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    bottom: '18%',
    right: '-2%',
    backgroundImage: 'linear-gradient(to bottom right, #55774A, #64B450, #DFF8D5)',
    position: 'absolute',
    zIndex: '10',
    animationName: '$move',
    animationDuration: '7s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  circle4: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    bottom: '0%',
    right: '1%',
    backgroundImage: 'linear-gradient(to bottom left, #FAEDF9, #EC82A8, #A0769F)',
    position: 'absolute',
    zIndex: '1',
    animationName: '$movement',
    animationDuration: '9s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  circle5: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    bottom: '30%',
    right: '1%',
    backgroundImage: 'linear-gradient(to top right, #FFB43C, #FFB88E, #FAE4DC)',
    position: 'absolute',
    zIndex: '1',
    animationName: '$movement',
    animationDuration: '8s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  circle6: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    bottom: '26%',
    left: '-1%',
    backgroundImage: 'linear-gradient(to bottom left, #FAEDF9, #EC82A8, #A0769F)',
    position: 'absolute',
    zIndex: '1',
    animationName: '$move',
    animationDuration: '4s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  circle7: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    bottom: '30%',
    left: '4%',
    backgroundImage: 'linear-gradient(to bottom right, #55774A, #64B450, #DFF8D5)',
    position: 'absolute',
    zIndex: '1',
    animationName: '$movement',
    animationDuration: '8s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  circle8: {
    // display: 'block',
    width: 30,
    height: 30,
    borderRadius: '50%',
    bottom: '3%',
    right: '-2%',
    backgroundImage: 'linear-gradient(to top right, #6370A4, #6370A4, #98A4DB, #E9EFFF)',
    position: 'absolute',
    zIndex: '1',
    animationName: '$move',
    animationDuration: '5s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
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
      transform: 'translateY(-2px)',
    },
    '50%': {
      transform: 'translateY(0px)',
    },
    '75%': {
      transform: 'translateY(-6px)',
    },
    '100%': {
      transform: 'translateY(0px)',
    },
  },
});