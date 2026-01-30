import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Profile from './Profile';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Social from './Social';
import Navigation from './Navigation';
import ProgressIndicator from './ProgressIndicator';
import ResumePreview from './ResumePreview';
import './../styles/App.css';

const App = () => {
  const [showPreview, setShowPreview] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(1);

  React.useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      setCurrentStep(state.currentStep);
    });
    return () => unsubscribe();
  }, []);

  const handleSave = () => {
    // Save functionality - can be extended to save to database
    const state = store.getState();
    localStorage.setItem('resumeData', JSON.stringify(state));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      store.dispatch({ type: 'SET_CURRENT_STEP', payload: currentStep + 1 });
    } else {
      setShowPreview(true);
    }
  };

  const handleBack = () => {
    if (showPreview) {
      setShowPreview(false);
    } else if (currentStep > 1) {
      store.dispatch({ type: 'SET_CURRENT_STEP', payload: currentStep - 1 });
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
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
