import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep } from '../redux/actions';

const Navigation = ({ onSave, onNext, onBack }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector(state => state.currentStep);
  const totalSteps = 5;

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else if (currentStep < totalSteps) {
      dispatch(setCurrentStep(currentStep + 1));
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (currentStep > 1) {
      dispatch(setCurrentStep(currentStep - 1));
    }
  };

  const handleSave = () => {
    if (onSave) {
      onSave();
    }
  };

  return (
    <div className="navigation">
      <button
        id="back"
        onClick={handleBack}
        className="btn-back"
        disabled={currentStep === 1}
      >
        BACK
      </button>
      {currentStep <= totalSteps && (
        <>
          <button
            id="next"
            onClick={handleNext}
            className="btn-next"
          >
            NEXT
          </button>
          <button
            id="save_continue"
            onClick={handleSave}
            className="btn-save"
          >
            SAVE AND CONTINUE
          </button>
        </>
      )}
    </div>
  );
};

export default Navigation;
