import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSocial, deleteSocial } from '../redux/actions';

const Social = () => {
  const dispatch = useDispatch();
  const social = useSelector(state => state.social);
  
  const [socialLink, setSocialLink] = useState('');

  const handleChange = (e) => {
    setSocialLink(e.target.value);
  };

  const handleAdd = () => {
    if (socialLink.trim()) {
      dispatch(addSocial(socialLink.trim()));
      setSocialLink('');
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteSocial(index));
  };

  return (
    <div className="form-container">
      <p className="form-subtitle">Add social links like linkedin , github etc</p>
      <div className="form-group">
        <input
          type="text"
          name="Social"
          placeholder="Social Links *"
          value={socialLink}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="button-group">
        <button
          id="delete_social"
          onClick={() => social.length > 0 && handleDelete(social.length - 1)}
          className="btn-delete"
          disabled={social.length === 0}
        >
          DELETE SOCIAL
        </button>
        <button
          id="add_social"
          onClick={handleAdd}
          className="btn-add"
        >
          ADD SOCIAL
        </button>
      </div>
    </div>
  );
};

export default Social;
