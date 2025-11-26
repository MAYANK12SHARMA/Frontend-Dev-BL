import React, { useState } from 'react';

const StudentForm = ({ student, onSubmit, onCancel }) => {
  const [name, setName] = useState(student ? student.name : '');
  const [section, setSection] = useState(student ? student.section : '');
  const [marks, setMarks] = useState(student ? student.marks : '');
  const [grade, setGrade] = useState(student ? student.grade : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      name,
      section,
      marks: parseInt(marks),
      grade,
    };
    onSubmit(studentData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{student ? 'Edit Student' : 'Add Student'}</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Section:</label>
          <input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Marks:</label>
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Grade:</label>
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <button type="submit" style={{ marginRight: '10px', padding: '10px 20px' }}>
            {student ? 'Update' : 'Add'}
          </button>
          <button type="button" onClick={onCancel} style={{ padding: '10px 20px' }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
