import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import Switch from '@mui/material/Switch';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Button from '@components/Button';
import CardStepTwo from '@components/CardStepTwo';

import { setPlan } from '@pages/Home/actions';

import classes from './style.module.scss';

const StepTwo = ({ handleBack, handleNext, handleSelect, activePlan, currentValue }) => {
  const dispatch = useDispatch();
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [valueSwitch, setValueSwitch] = useState('Monthly');
  const handleSwitch = (e) => {
    const { checked } = e.target;
    if (checked) {
      setValueSwitch('Yearly');
    } else {
      setValueSwitch('Monthly');
    }
  };
  const priceArcade = valueSwitch === 'Monthly' ? 9 : 90;
  const priceAdvance = valueSwitch === 'Monthly' ? 12 : 120;
  const pricePro = valueSwitch === 'Monthly' ? 15 : 150;
  const timePrice = valueSwitch === 'Monthly' ? 'mo' : 'yr';
  useEffect(() => {
    if (currentValue) {
      if (currentValue?.type === 'Arcade') {
        dispatch(setPlan({ type: currentValue?.type, price: priceArcade, time: timePrice }));
      } else if (currentValue?.type === 'Pro') {
        dispatch(setPlan({ type: currentValue?.type, price: pricePro, time: timePrice }));
      } else if (currentValue?.type === 'Advance') {
        dispatch(setPlan({ type: currentValue?.type, price: priceAdvance, time: timePrice }));
      }
    }
  }, [valueSwitch]);
  return (
    <div className={classes.contentWrapper}>
      <div className={classes.headingText}>
        <FormattedMessage id="app_head_title_step_two" />
      </div>
      <div className={classes.subText}>
        <FormattedMessage id="app_sub_title_step_two" />
      </div>
      <div className={classes.cardWrapper}>
        <CardStepTwo
          active={activePlan}
          timePrice={timePrice}
          handleSelect={() => handleSelect({ type: 'Arcade', price: priceArcade, time: timePrice })}
          image="/public/images/icon-arcade.svg"
          text="Arcade"
          price={valueSwitch === 'Monthly' ? 9 : 90}
          time={<FormattedMessage id="app_content_card_time" />}
        />
        <CardStepTwo
          active={activePlan}
          timePrice={timePrice}
          handleSelect={() => handleSelect({ type: 'Advance', price: priceAdvance, time: timePrice })}
          image="/public/images/icon-advanced.svg"
          text="Advance"
          price={valueSwitch === 'Monthly' ? 12 : 120}
          time={<FormattedMessage id="app_content_card_time" />}
        />
        <CardStepTwo
          active={activePlan}
          timePrice={timePrice}
          handleSelect={() => handleSelect({ type: 'Pro', price: pricePro, time: timePrice })}
          image="/public/images/icon-pro.svg"
          text="Pro"
          price={valueSwitch === 'Monthly' ? 15 : 150}
          time={<FormattedMessage id="app_content_card_time" />}
        />
      </div>
      <div className={classes.wrapperSwitch}>
        <div className={`${classes.title} ${classes.active}`}>
          <FormattedMessage id="app_content_long_month" />
        </div>
        <Switch {...label} onChange={handleSwitch} />
        <div className={`${classes.title}`}>
          <FormattedMessage id="app_content_long_year" />
        </div>
      </div>
      <div className={classes.wrapperBtn}>
        <Button text={<FormattedMessage id="app_content_text_btn_back" />} variant="transparent" onClick={handleBack} />
        <Button text={<FormattedMessage id="app_content_text_btn" />} variant="blue" onClick={handleNext} />
      </div>
    </div>
  );
};
StepTwo.propTypes = {
  handleBack: PropTypes.func,
  handleNext: PropTypes.func,
  handleSelect: PropTypes.func,
  activePlan: PropTypes.string,
  currentValue: PropTypes.object,
};

export default StepTwo;
