import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetResume, setCurrentStep } from '../redux/actions';

const ResumePreview = ({ onEdit }) => {
  const dispatch = useDispatch();
  const { profile, education, skills, projects, social } = useSelector(state => state);

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all data?')) {
      dispatch(resetResume());
      dispatch(setCurrentStep(1));
      if (onEdit) onEdit();
    }
  };

  const handleEdit = () => {
    dispatch(setCurrentStep(1));
    if (onEdit) onEdit();
  };

  const handleDownload = () => {
    const resumeContent = `
      Name: ${profile.fname} ${profile.lname}
      Address: ${profile.address}
      Phone Number: ${profile.phone}
      
      Education:
      ${education.map(edu => `
        ${edu.college}
        Graduation Year: ${edu.completionYear}
        ${edu.courseName}
        Percentage: ${edu.percentage}%`).join('\n')}
      
      Skills:
      ${skills.map(skill => `- ${skill}`).join('\n')}
      
      Mini Projects:
      ${projects.map(proj => `
        ${proj.projectName}
        ${proj.description}
        Tech Stack: ${proj.techStack}`).join('\n')}
      
      Social Links:
      ${social.map(link => `- ${link}`).join('\n')}
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="resume-preview-container">
      <div className="resume-header">
        <h2>All steps completed - your resume is ready!!</h2>
        <div className="resume-actions">
          <button onClick={handleReset} className="btn-link">RESET</button>
          <button onClick={handleEdit} className="btn-link">EDIT</button>
          <button onClick={handleDownload} id="download_preview" className="btn-download">DOWNLOAD / PREVIEW</button>
        </div>
      </div>
      
      <div className="resume-content">
        <div className="resume-left">
          {profile.url && (
            <div className="profile-image-container">
              <img src={profile.url} alt="Profile" className="profile-image" />
            </div>
          )}
          <div className="skills-section">
            <h3>Skills</h3>
            <hr />
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="resume-right">
          <div className="personal-info">
            <h1>{profile.fname} {profile.lname}</h1>
            <p>Address : {profile.address}</p>
            <p>Phone Number: {profile.phone}</p>
          </div>
          
          <div className="education-section">
            <h3>Education</h3>
            <hr />
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <p>{edu.college}</p>
                <p>Graduation Year : {edu.completionYear}</p>
                <p>{edu.courseName}</p>
                <p>Percentage : {edu.percentage}%</p>
              </div>
            ))}
          </div>
          
          <div className="projects-section">
            <h3>Mini Projects</h3>
            <hr />
            {projects.map((proj, index) => (
              <div key={index} className="project-item">
                <p>{proj.projectName}</p>
                <p>{proj.description}</p>
                <p>Tech Stack : {proj.techStack}</p>
              </div>
            ))}
          </div>
          
          <div className="social-section">
            <h3>Social Links</h3>
            <hr />
            <ul>
              {social.map((link, index) => (
                <li key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
