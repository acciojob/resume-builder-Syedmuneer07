import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../redux/actions';

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);
  
  const [formData, setFormData] = useState({
    fname: profile.fname || '',
    lname: profile.lname || '',
    phone: profile.phone || '',
    address: profile.address || '',
    url: profile.url || ''
  });

  useEffect(() => {
    setFormData({
      fname: profile.fname || '',
      lname: profile.lname || '',
      phone: profile.phone || '',
      address: profile.address || '',
      url: profile.url || ''
    });
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    dispatch(updateProfile({ [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(updateProfile({ url: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add your profile details</h2>
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="fname"
            placeholder="First Name *"
            value={formData.fname}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lname"
            placeholder="Last Name *"
            value={formData.lname}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            placeholder="Address *"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="file-label">Profile Image</label>
        <input
          type="file"
          name="url"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input"
        />
      </div>
    </div>
  );
};

export default Profile;
