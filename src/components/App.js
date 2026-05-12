
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from '../redux/store';
import Profile from './Profile';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Social from './Social';
import Navigation from './Navigation';
import ProgressIndicator from './ProgressIndicator';
import ResumePreview from './ResumePreview';
import { setCurrentStep } from '../redux/actions';
import './../styles/App.css';

const AppContent = () => {
  const [showPreview, setShowPreview] = React.useState(false);
  const currentStep = useSelector(state => state.currentStep);
  const dispatch = useDispatch();

  const handleSave = () => {
    // Save functionality - can be extended to save to database
    // Save to localStorage for now
    // You can replace this with an API call to save to a database
    const state = store.getState();
    localStorage.setItem('resumeData', JSON.stringify(state));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      dispatch(setCurrentStep(currentStep + 1));
    } else {
      setShowPreview(true);
    }
  };

  const handleBack = () => {
    if (showPreview) {
      setShowPreview(false);
    } else if (currentStep > 1) {
      dispatch(setCurrentStep(currentStep - 1));
    }
  };

  const handleEditFromPreview = () => {
    setShowPreview(false);
  };

  const renderStep = () => {
    if (showPreview) {
      return <ResumePreview onEdit={handleEditFromPreview} />;
    }
    switch (currentStep) {
      case 1:
        return <Profile />;
      case 2:
        return <Education />;
      case 3:
        return <Skills />;
      case 4:
        return <Projects />;
      case 5:
        return <Social />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>RESUME GENERATOR</h1>
      </div>
      {!showPreview && <ProgressIndicator />}
      <div className="main-content">
        {renderStep()}
      </div>
      {!showPreview && <Navigation onSave={handleSave} onNext={handleNext} onBack={handleBack} />}
      {showPreview && (
        <div className="preview-navigation">
          <button onClick={handleBack} className="btn-link">BACK</button>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default App;
