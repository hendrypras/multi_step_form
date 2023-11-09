import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import classes from './style.module.scss';

const Sidebar = ({ step }) => (
  <aside className={classes.sidebarWrapper}>
    <div className={classes.stepWrapper}>
      <div className={`${classes.numberIcon} ${!step || step === 1 ? classes.active : ''}`}>1</div>
      <div className={classes.textWrapper}>
        <div className={classes.textHead}>
          <FormattedMessage id="app_sidebar_biodata_setp_one" />
        </div>
        <div className={classes.textBottom}>
          <FormattedMessage id="app_sidebar_biodata_text_one" />
        </div>
      </div>
    </div>
    <div className={classes.stepWrapper}>
      <div className={`${classes.numberIcon} ${step === 2 ? classes.active : ''}`}>2</div>
      <div className={classes.textWrapper}>
        <div className={classes.textHead}>
          <FormattedMessage id="app_sidebar_biodata_setp_two" />
        </div>
        <div className={classes.textBottom}>
          <FormattedMessage id="app_sidebar_biodata_text_two" />
        </div>
      </div>
    </div>
    <div className={classes.stepWrapper}>
      <div className={`${classes.numberIcon} ${step === 3 ? classes.active : ''}`}>3</div>
      <div className={classes.textWrapper}>
        <div className={classes.textHead}>
          <FormattedMessage id="app_sidebar_biodata_setp_three" />
        </div>
        <div className={classes.textBottom}>
          <FormattedMessage id="app_sidebar_biodata_text_three" />
        </div>
      </div>
    </div>
    <div className={classes.stepWrapper}>
      <div className={`${classes.numberIcon} ${step === 4 ? classes.active : ''}`}>4</div>
      <div className={classes.textWrapper}>
        <div className={classes.textHead}>
          <FormattedMessage id="app_sidebar_biodata_setp_four" />
        </div>
        <div className={classes.textBottom}>
          <FormattedMessage id="app_sidebar_biodata_text_four" />
        </div>
      </div>
    </div>
  </aside>
);

Sidebar.propTypes = {
  step: PropTypes.number,
};
export default Sidebar;
