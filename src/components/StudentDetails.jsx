import React from 'react';

const StudentDetails = ({ student, onBack }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Details</h2>
      <div style={{ maxWidth: '400px', marginTop: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <strong>ID:</strong> {student.id}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>Name:</strong> {student.name}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>Section:</strong> {student.section}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>Marks:</strong> {student.marks}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>Grade:</strong> {student.grade}
        </div>
        <button onClick={onBack} style={{ padding: '10px 20px' }}>
          Back to List
        </button>
      </div>
    </div>
  );
};

export default StudentDetails;
