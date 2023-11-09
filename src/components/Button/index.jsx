import PropTypes from 'prop-types';

import classes from './style.module.scss';

const Button = ({ text, variant, onClick }) => {
  let wrapperStyle = {};
  let textStyle = {};

  switch (variant) {
    case 'blue':
      wrapperStyle = {
        backgroundColor: 'hsl(213, 96%, 18%)',
      };
      textStyle = {
        color: 'white',
      };
      break;
    case 'transparent':
      wrapperStyle = {
        backgroundColor: 'transparent',
      };
      textStyle = {
        color: 'gray',
      };
      break;
    default:
      wrapperStyle = {
        backgroundColor: 'hsl(243, 100%, 62%)',
      };
      textStyle = {
        color: 'white',
      };
      break;
  }

  return (
    <div className={classes.wrapper} onClick={onClick} style={wrapperStyle}>
      <div className={classes.text} style={textStyle}>
        {text}
      </div>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
