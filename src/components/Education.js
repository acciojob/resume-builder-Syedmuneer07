import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEducation, deleteEducation, updateEducation } from '../redux/actions';

const Education = () => {
  const dispatch = useDispatch();
  const education = useSelector(state => state.education);
  
  const [formData, setFormData] = useState({
    courseName: '',
    completionYear: '',
    college: '',
    percentage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAdd = () => {
    if (formData.courseName && formData.completionYear && formData.college && formData.percentage) {
      dispatch(addEducation({ ...formData }));
      setFormData({
        courseName: '',
        completionYear: '',
        college: '',
        percentage: ''
      });
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteEducation(index));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add your Education Details</h2>
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="courseName"
            placeholder="Course Name *"
            value={formData.courseName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="completionYear"
            placeholder="Completion Year *"
            value={formData.completionYear}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="college"
            placeholder="College/School *"
            value={formData.college}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="percentage"
            placeholder="Percentage *"
            value={formData.percentage}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>
      <div className="button-group">
        <button
          id="delete"
          onClick={() => education.length > 0 && handleDelete(education.length - 1)}
          className="btn-delete"
          disabled={education.length === 0}
        >
          DELETE
        </button>
        <button
          id="add_education"
          onClick={handleAdd}
          className="btn-add"
        >
          ADD EDUCATION
        </button>
      </div>
    </div>
  );
};

export default Education;
