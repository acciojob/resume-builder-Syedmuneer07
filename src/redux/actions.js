// Action Types
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const ADD_EDUCATION = 'ADD_EDUCATION';
export const DELETE_EDUCATION = 'DELETE_EDUCATION';
export const UPDATE_EDUCATION = 'UPDATE_EDUCATION';
export const ADD_SKILL = 'ADD_SKILL';
export const DELETE_SKILL = 'DELETE_SKILL';
export const UPDATE_SKILL = 'UPDATE_SKILL';
export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const ADD_SOCIAL = 'ADD_SOCIAL';
export const DELETE_SOCIAL = 'DELETE_SOCIAL';
export const UPDATE_SOCIAL = 'UPDATE_SOCIAL';
export const SET_CURRENT_STEP = 'SET_CURRENT_STEP';
export const RESET_RESUME = 'RESET_RESUME';

// Action Creators
export const updateProfile = (profileData) => ({
  type: UPDATE_PROFILE,
  payload: profileData
});

export const addEducation = (education) => ({
  type: ADD_EDUCATION,
  payload: education
});

export const deleteEducation = (index) => ({
  type: DELETE_EDUCATION,
  payload: index
});

export const updateEducation = (index, education) => ({
  type: UPDATE_EDUCATION,
  payload: { index, education }
});

export const addSkill = (skill) => ({
  type: ADD_SKILL,
  payload: skill
});

export const deleteSkill = (index) => ({
  type: DELETE_SKILL,
  payload: index
});

export const updateSkill = (index, skill) => ({
  type: UPDATE_SKILL,
  payload: { index, skill }
});

export const addProject = (project) => ({
  type: ADD_PROJECT,
  payload: project
});

export const deleteProject = (index) => ({
  type: DELETE_PROJECT,
  payload: index
});

export const updateProject = (index, project) => ({
  type: UPDATE_PROJECT,
  payload: { index, project }
});

export const addSocial = (social) => ({
  type: ADD_SOCIAL,
  payload: social
});

export const deleteSocial = (index) => ({
  type: DELETE_SOCIAL,
  payload: index
});

export const updateSocial = (index, social) => ({
  type: UPDATE_SOCIAL,
  payload: { index, social }
});

export const setCurrentStep = (step) => ({
  type: SET_CURRENT_STEP,
  payload: step
});

export const resetResume = () => ({
  type: RESET_RESUME
});
