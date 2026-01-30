import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProject, deleteProject } from '../redux/actions';

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects);
  
  const [formData, setFormData] = useState({
    projectName: '',
    techStack: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAdd = () => {
    if (formData.projectName.trim()) {
      dispatch(addProject({ ...formData }));
      setFormData({
        projectName: '',
        techStack: '',
        description: ''
      });
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteProject(index));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add your Mini Projects</h2>
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="projectName"
            placeholder="Project Name *"
            value={formData.projectName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="techStack"
            placeholder="Tech Stack"
            value={formData.techStack}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>
      <div className="button-group">
        <button
          id="delete"
          onClick={() => projects.length > 0 && handleDelete(projects.length - 1)}
          className="btn-delete"
          disabled={projects.length === 0}
        >
          DELETE
        </button>
        <button
          id="add_project"
          onClick={handleAdd}
          className="btn-add"
        >
          ADD PROJECT
        </button>
      </div>
    </div>
  );
};

export default Projects;
