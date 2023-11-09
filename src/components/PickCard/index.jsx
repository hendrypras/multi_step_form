import PropTypes from 'prop-types';

import classes from './style.module.scss';

const PickCard = ({ title, subTitle, price, time, selected, currentValue = [] }) => {
  const handleChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      const updatedValue = [...currentValue, { title, price }];
      selected(updatedValue);
    } else {
      const updatedValue = currentValue?.filter((item) => item.title !== title);
      selected(updatedValue);
    }
  };

  const checked = currentValue?.some((item) => item.title === title);
  return (
    <div className={classes.wrapper}>
      <div className={classes.leftWrapper}>
        <input checked={checked} type="checkbox" className={classes.checkBox} onChange={handleChange} />
        <div className={classes.textWrapper}>
          <div className={classes.title}>{title}</div>
          <div className={classes.subTitle}>{subTitle}</div>
        </div>
      </div>
      <div className={classes.price}>
        +${price}
        {time}
      </div>
    </div>
  );
};

PickCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  price: PropTypes.number,
  time: PropTypes.string,
  selected: PropTypes.func,
  currentValue: PropTypes.array,
};
export default PickCard;
