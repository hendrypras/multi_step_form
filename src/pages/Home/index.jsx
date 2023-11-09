import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import toast from 'react-hot-toast';

import { selectStep, selectSummary } from '@pages/Home/selectors';

import Sidebar from '@components/Sidebar';
import StepOne from '@components/StepOne';
import StepTwo from '@components/StepTwo';
import StepThree from '@components/StepThree';
import StepFour from '@components/StepFour';
import SuccessConfirmation from '@components/SuccessConfirmation';

import { setAddOns, setBiodata, setPlan, setStep } from './actions';

import classes from './style.module.scss';

const Home = ({ step, summary }) => {
  const dispatch = useDispatch();
  const [msgErrName, setMsgErrName] = useState('');
  const [msgErrEmail, setMsgErrEmail] = useState('');
  const [msgErrPhone, setMsgErrPhone] = useState('');
  const [inputForm, setInputForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });
  useEffect(() => {
    if (summary) {
      setInputForm({
        name: summary?.biodata?.name,
        email: summary?.biodata?.email,
        phoneNumber: summary?.biodata?.phoneNumber,
      });
    }
  }, [summary]);
  const handleChangeInput = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validate = () => {
    let result = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;

    if (!inputForm.name) {
      setMsgErrName('This field is required');
      result = false;
    } else {
      setMsgErrName('');
    }

    if (!inputForm.email) {
      setMsgErrEmail('This field is required');
      result = false;
    } else if (!emailRegex.test(inputForm.email)) {
      setMsgErrEmail('Please enter a valid email address');
      result = false;
    } else {
      setMsgErrEmail('');
    }

    if (!inputForm.phoneNumber) {
      setMsgErrPhone('This field is required');
      result = false;
    } else if (!phoneRegex.test(inputForm.phoneNumber)) {
      setMsgErrPhone('Phone number should contain only numbers');
      result = false;
    } else {
      setMsgErrPhone('');
    }

    return result;
  };

  const validateNextStep = (data) => {
    let result = true;
    if (!data) {
      result = false;
      toast.error('Please choose one');
    }
    return result;
  };
  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1 && validate()) {
      dispatch(setStep(step + 1));
      dispatch(setBiodata(inputForm));
    } else if (step === 2 && validateNextStep(summary.plan)) {
      dispatch(setStep(step + 1));
    } else if (step === 3 && validateNextStep(summary.addOns)) {
      dispatch(setStep(step + 1));
    } else if (step === 4 && validateNextStep(summary.totalPrice)) {
      dispatch(setStep(step + 1));
    }
  };
  const handleBackStep = () => {
    dispatch(setStep(step - 1));
  };

  const renderStepContent = () => {
    const totalAddOns = summary?.addOns?.reduce((acc, current) => acc + current.price, 0);
    const totalPrice = Number(summary?.plan?.price) + totalAddOns;
    switch (step) {
      case 1:
        return (
          <StepOne
            handleNext={handleNextStep}
            onChange={handleChangeInput}
            errorEmail={msgErrEmail}
            errorName={msgErrName}
            errorPhone={msgErrPhone}
            valueInput={inputForm}
          />
        );
      case 2:
        return (
          <StepTwo
            handleBack={handleBackStep}
            handleNext={handleNextStep}
            handleSelect={(data) => dispatch(setPlan(data))}
            activePlan={summary?.plan?.type}
            currentValue={summary?.plan}
          />
        );
      case 3:
        return (
          <StepThree
            selecetedAddOns={(data) => dispatch(setAddOns(data))}
            handleBack={handleBackStep}
            handleNext={handleNextStep}
            planValue={summary?.plan}
            currentValue={summary?.addOns}
          />
        );

      case 4:
        return (
          <StepFour
            planType={summary?.plan?.type}
            planTime={summary?.plan?.time}
            price={`${summary?.plan?.price}/${summary?.plan?.time}`}
            totalPrice={totalPrice}
            handleBack={handleBackStep}
            handleConfirm={handleNextStep}
            valueAddons={summary?.addOns}
          />
        );
      case 5:
        return <SuccessConfirmation handleBackToHome={() => dispatch(setStep(1))} />;

      default:
        return (
          <StepOne
            handleNext={handleNextStep}
            onChange={handleChangeInput}
            errorEmail={msgErrEmail}
            errorName={msgErrName}
            errorPhone={msgErrPhone}
            valueInput={inputForm}
          />
        );
    }
  };
  return (
    <div className={classes.wrapper}>
      <Sidebar step={step} />
      {renderStepContent()}
    </div>
  );
};
Home.propTypes = {
  step: PropTypes.number,
  summary: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  step: selectStep,
  summary: selectSummary,
});
export default connect(mapStateToProps)(Home);
