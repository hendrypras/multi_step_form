import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import classes from './style.module.scss';

const SuccessConfirmation = ({ handleBackToHome }) => (
  <div className={classes.contentWrapper}>
    <img src="public/images/icon-thank-you.svg" alt="" />
    <div className={classes.title}>
      <FormattedMessage id="app_content_confirmation_text" />
    </div>
    <div className={classes.paragraf}>
      <FormattedMessage id="app_content_confirmation_paragraf" />
    </div>
    <div className={classes.btn} onClick={handleBackToHome}>
      <FormattedMessage id="app_content_text_btn_back_home" />
    </div>
  </div>
);
SuccessConfirmation.propTypes = {
  handleBackToHome: PropTypes.func,
};

export default SuccessConfirmation;
