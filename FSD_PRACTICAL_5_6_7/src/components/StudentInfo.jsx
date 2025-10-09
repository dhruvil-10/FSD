import React from 'react';
import './StudentInfo.css';

const StudentInfo = () => {
  return (
    <div className="student-info">
      <div className="student-card">
        <div className="student-avatar">
          <span className="avatar-text">DP</span>
        </div>
        <div className="student-details">
          <h2 className="student-name">Dhruvil Patel</h2>
          <p className="student-id">Student ID: 23cs061</p>
          <p className="student-course">Computer Science Engineering</p>
          <p className="student-institute">CHARUSAT University</p>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;