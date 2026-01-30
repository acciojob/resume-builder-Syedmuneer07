import {
  UPDATE_PROFILE,
  ADD_EDUCATION,
  DELETE_EDUCATION,
  UPDATE_EDUCATION,
  ADD_SKILL,
  DELETE_SKILL,
  UPDATE_SKILL,
  ADD_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
  ADD_SOCIAL,
  DELETE_SOCIAL,
  UPDATE_SOCIAL,
  SET_CURRENT_STEP,
  RESET_RESUME
} from './actions';

const initialState = {
  currentStep: 1,
  profile: {
    fname: '',
    lname: '',
    phone: '',
    address: '',
    url: ''
  },
  education: [],
  skills: [],
  projects: [],
  social: []
};

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.payload
        }
      };

    case ADD_EDUCATION:
      return {
        ...state,
        education: [...state.education, action.payload]
      };

    case DELETE_EDUCATION:
      return {
        ...state,
        education: state.education.filter((_, index) => index !== action.payload)
      };

    case UPDATE_EDUCATION:
      return {
        ...state,
        education: state.education.map((edu, index) =>
          index === action.payload.index ? action.payload.education : edu
        )
      };

    case ADD_SKILL:
      return {
        ...state,
        skills: [...state.skills, action.payload]
      };

    case DELETE_SKILL:
      return {
        ...state,
        skills: state.skills.filter((_, index) => index !== action.payload)
      };

    case UPDATE_SKILL:
      return {
        ...state,
        skills: state.skills.map((skill, index) =>
          index === action.payload.index ? action.payload.skill : skill
        )
      };

    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((_, index) => index !== action.payload)
      };

    case UPDATE_PROJECT:
      return {
        ...state,
        projects: state.projects.map((project, index) =>
          index === action.payload.index ? action.payload.project : project
        )
      };

    case ADD_SOCIAL:
      return {
        ...state,
        social: [...state.social, action.payload]
      };

    case DELETE_SOCIAL:
      return {
        ...state,
        social: state.social.filter((_, index) => index !== action.payload)
      };

    case UPDATE_SOCIAL:
      return {
        ...state,
        social: state.social.map((social, index) =>
          index === action.payload.index ? action.payload.social : social
        )
      };

    case SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: action.payload
      };

    case RESET_RESUME:
      return initialState;

    default:
      return state;
  }
};

export default resumeReducer;
