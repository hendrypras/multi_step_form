import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import PickCard from '@components/PickCard';
import Button from '@components/Button';

import classes from './style.module.scss';

const StepThree = ({ handleBack, handleNext, selecetedAddOns, planValue, currentValue }) => {
  const time = planValue?.time === 'yr' ? 'yr' : 'mo';

  return (
    <div className={classes.contentWrapper}>
      <div className={classes.headingText}>
        <FormattedMessage id="app_head_title_step_three" />
      </div>
      <div className={classes.subText}>
        <FormattedMessage id="app_sub_title_step_three" />
      </div>
      <div className={classes.wrapperPickCard}>
        <PickCard
          title="Online service"
          subTitle="Access to multiplayers games"
          price={planValue?.time === 'yr' ? 10 : 1}
          time={time}
          selected={(data) => selecetedAddOns(data)}
          currentValue={currentValue}
        />
        <PickCard
          title="Larger storage"
          subTitle="Extra 1TB of cloud save"
          price={planValue?.time === 'yr' ? 20 : 2}
          time={time}
          selected={(data) => selecetedAddOns(data)}
          currentValue={currentValue}
        />
        <PickCard
          title="Customizable profile"
          subTitle="Custome theme on your profile"
          price={planValue?.time === 'yr' ? 20 : 2}
          time={time}
          selected={(data) => selecetedAddOns(data)}
          currentValue={currentValue}
        />
      </div>
      <div className={classes.wrapperBtn}>
        <Button text={<FormattedMessage id="app_content_text_btn_back" />} variant="transparent" onClick={handleBack} />
        <Button text={<FormattedMessage id="app_content_text_btn" />} variant="blue" onClick={handleNext} />
      </div>
    </div>
  );
};
StepThree.propTypes = {
  handleBack: PropTypes.func,
  handleNext: PropTypes.func,
  selecetedAddOns: PropTypes.func,
  planValue: PropTypes.object,
  currentValue: PropTypes.array,
};

export default StepThree;
