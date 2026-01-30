import React from 'react';
import { useSelector } from 'react-redux';

const ProgressIndicator = () => {
  const currentStep = useSelector(state => state.currentStep);
  
  const steps = [
    { number: 1, label: 'Profile Section' },
    { number: 2, label: 'Education Section' },
    { number: 3, label: 'Skills Sector' },
    { number: 4, label: 'Mini Project' },
    { number: 5, label: 'Social' }
  ];

  return (
    <div className="progress-indicator">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className={`step ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}>
            <div className="step-circle">{step.number}</div>
            <div className="step-label">{step.label}</div>
          </div>
          {index < steps.length - 1 && <div className="step-connector"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressIndicator;
