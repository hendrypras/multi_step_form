import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import classes from './style.module.scss';

const FormStepOne = ({ errorName, errorPhone, errorEmail, onChange, valueInput }) => (
  <form action="#" className={classes.form}>
    <div className={classes.inputWrapper}>
      <div className={classes.textWrapper}>
        <div className={classes.label}>
          <FormattedMessage id="app_label_name_step_one" />
        </div>
        <div className={classes.errorText}>{errorName}</div>
      </div>
      <input
        value={valueInput.name}
        name="name"
        onChange={onChange}
        type="text"
        placeholder="e.g. Stephen King"
        className={classes.input}
      />
    </div>
    <div className={classes.inputWrapper}>
      <div className={classes.textWrapper}>
        <div className={classes.label}>
          <FormattedMessage id="app_label_email_step_one" />
        </div>
        <div className={classes.errorText}>{errorEmail}</div>
      </div>
      <input
        value={valueInput.email}
        name="email"
        onChange={onChange}
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        className={classes.input}
      />
    </div>
    <div className={classes.inputWrapper}>
      <div className={classes.textWrapper}>
        <div className={classes.label}>
          <FormattedMessage id="app_label_number_step_one" />
        </div>
        <div className={classes.errorText}>{errorPhone}</div>
      </div>
      <input
        name="phoneNumber"
        value={valueInput.phoneNumber}
        onChange={onChange}
        type="text"
        placeholder="e.g. + 1 2 3 4 5 6 7 8 9 0"
        className={classes.input}
      />
    </div>
  </form>
);
FormStepOne.propTypes = {
  errorName: PropTypes.string,
  errorPhone: PropTypes.string,
  errorEmail: PropTypes.string,
  onChange: PropTypes.func,
  valueInput: PropTypes.object,
};

export default FormStepOne;
