import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSkill, deleteSkill } from '../redux/actions';

const Skills = () => {
  const dispatch = useDispatch();
  const skills = useSelector(state => state.skills);
  
  const [skill, setSkill] = useState('');

  const handleChange = (e) => {
    setSkill(e.target.value);
  };

  const handleAdd = () => {
    if (skill.trim()) {
      dispatch(addSkill(skill.trim()));
      setSkill('');
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteSkill(index));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add your Skills</h2>
      <div className="form-group">
        <input
          type="text"
          name="skill"
          placeholder="Skill *"
          value={skill}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="button-group">
        <button
          id="delete_skill"
          onClick={() => skills.length > 0 && handleDelete(skills.length - 1)}
          className="btn-delete"
          disabled={skills.length === 0}
        >
          DELETE SKILL
        </button>
        <button
          id="add_skill"
          onClick={handleAdd}
          className="btn-add"
        >
          ADD SKILL
        </button>
      </div>
    </div>
  );
};

export default Skills;
