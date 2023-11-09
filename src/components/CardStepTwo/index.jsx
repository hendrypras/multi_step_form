import PropTypes from 'prop-types';

import classes from './style.module.scss';

const CardStepTwo = ({ image, text, price, time, handleSelect, active, timePrice }) => (
  <div className={`${classes.wrapper} ${active === text ? classes.active : null}`} onClick={handleSelect}>
    <img src={image} alt="icon" />
    <div className={classes.wrapperContentText}>
      <div className={classes.title}>{text}</div>
      <div className={classes.price}>
        ${price}
        {timePrice}
      </div>
      <div className={classes.time}>{time}</div>
    </div>
  </div>
);

CardStepTwo.propTypes = {
  image: PropTypes.string,
  active: PropTypes.string,
  text: PropTypes.string,
  timePrice: PropTypes.string,
  price: PropTypes.number,
  time: PropTypes.object,
  handleSelect: PropTypes.func,
};
export default CardStepTwo;
