import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Button from '@components/Button';
import { setConfirmation } from '@pages/Home/actions';

import classes from './style.module.scss';

const StepFour = ({ handleBack, handleConfirm, planType, planTime, price, totalPrice, valueAddons }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setConfirmation(totalPrice));
  }, [dispatch]);
  return (
    <div className={classes.contentWrapper}>
      <div className={classes.headingText}>
        <FormattedMessage id="app_head_title_step_four" />
      </div>
      <div className={classes.subText}>
        <FormattedMessage id="app_sub_title_step_four" />
      </div>
      <div className={classes.paymentWrapper}>
        <div className={classes.paymentCard}>
          <div className={classes.headWrapper}>
            <div className={classes.wrapperLeft}>
              <div className={classes.headCardTextLeft}>
                <div>{planType}</div>
                <div>
                  (
                  {planTime === 'yr' ? (
                    <FormattedMessage id="app_content_long_year" />
                  ) : (
                    <FormattedMessage id="app_content_long_month" />
                  )}
                  )
                </div>
              </div>
              <div className={classes.changeBtn}>Change</div>
            </div>
            <div className={classes.price}>${price}</div>
          </div>
          <hr className={classes.hr} />
          <div className={classes.serviceWrapper}>
            {valueAddons?.map((val, i) => (
              <div className={classes.wrapperContent} key={i}>
                <div className={classes.service}>{val?.title}</div>
                <div className={classes.price}>
                  +${val?.price}/
                  {planTime === 'yr' ? (
                    <FormattedMessage id="app_content_short_year" />
                  ) : (
                    <FormattedMessage id="app_content_short_month" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.toalWrapper}>
          <div className={classes.leftWrapper}>
            <div>Total</div>
            <div>
              (per{' '}
              {planTime === 'yr' ? (
                <FormattedMessage id="app_content_one_yer" />
              ) : (
                <FormattedMessage id="app_content_one_month" />
              )}
              )
            </div>
          </div>
          <div className={classes.priceTotal}>
            +${totalPrice.toString()}/
            {planTime === 'yr' ? (
              <FormattedMessage id="app_content_short_year" />
            ) : (
              <FormattedMessage id="app_content_short_month" />
            )}
          </div>
        </div>
      </div>
      <div className={classes.wrapperBtn}>
        <Button text={<FormattedMessage id="app_content_text_btn_back" />} variant="transparent" onClick={handleBack} />
        <Button text={<FormattedMessage id="app_content_text_btn_confirm" />} onClick={handleConfirm} />
      </div>
    </div>
  );
};

StepFour.propTypes = {
  handleBack: PropTypes.func,
  handleConfirm: PropTypes.func,
  planType: PropTypes.string,
  planTime: PropTypes.string,
  price: PropTypes.string,
  totalPrice: PropTypes.number,
  valueAddons: PropTypes.array,
};
export default StepFour;
