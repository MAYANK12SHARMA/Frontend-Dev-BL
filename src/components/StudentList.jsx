import React from 'react';

const StudentList = ({ students, onLoadStudents, onAdd, onEdit, onDelete, onViewDetails }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Result Management System</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={onLoadStudents} style={{ marginRight: '10px', padding: '10px 20px' }}>
          Load Students
        </button>
        <button onClick={onAdd} style={{ padding: '10px 20px' }}>
          Add Student
        </button>
      </div>

      {students.length === 0 ? (
        <p>No students found. Click "Load Students" to fetch data.</p>
      ) : (
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>ID</th>
              <th style={{ padding: '10px' }}>Name</th>
              <th style={{ padding: '10px' }}>Section</th>
              <th style={{ padding: '10px' }}>Marks</th>
              <th style={{ padding: '10px' }}>Grade</th>
              <th style={{ padding: '10px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td style={{ padding: '10px' }}>{student.id}</td>
                <td style={{ padding: '10px' }}>{student.name}</td>
                <td style={{ padding: '10px' }}>{student.section}</td>
                <td style={{ padding: '10px' }}>{student.marks}</td>
                <td style={{ padding: '10px' }}>{student.grade}</td>
                <td style={{ padding: '10px' }}>
                  <button onClick={() => onViewDetails(student)} style={{ marginRight: '5px' }}>
                    View
                  </button>
                  <button onClick={() => onEdit(student)} style={{ marginRight: '5px' }}>
                    Edit
                  </button>
                  <button onClick={() => onDelete(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;
