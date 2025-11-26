import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import { getAllStudents, addStudent, updateStudent, deleteStudent } from './services/studentService';

function App() {
  const [students, setStudents] = useState([]);
  const [currentView, setCurrentView] = useState('list');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);

  const handleLoadStudents = async () => {
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch (error) {
      alert('Failed to load students');
    }
  };

  const handleAddStudent = async (studentData) => {
    try {
      await addStudent(studentData);
      alert('Student added successfully! Click "Load Students" to refresh the list.');
      setCurrentView('list');
    } catch (error) {
      alert('Failed to add student');
    }
  };

  const handleUpdateStudent = async (studentData) => {
    try {
      await updateStudent(editingStudent.id, studentData);
      alert('Student updated successfully! Click "Load Students" to refresh the list.');
      setCurrentView('list');
      setEditingStudent(null);
    } catch (error) {
      alert('Failed to update student');
    }
  };

  const handleDeleteStudent = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudent(id);
        alert('Student deleted successfully! Click "Load Students" to refresh the list.');
      } catch (error) {
        alert('Failed to delete student');
      }
    }
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setCurrentView('details');
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setCurrentView('form');
  };

  const handleAdd = () => {
    setEditingStudent(null);
    setCurrentView('form');
  };

  const handleCancel = () => {
    setEditingStudent(null);
    setCurrentView('list');
  };

  const handleBack = () => {
    setSelectedStudent(null);
    setCurrentView('list');
  };

  return (
    <div>
      {currentView === 'list' && (
        <StudentList
          students={students}
          onLoadStudents={handleLoadStudents}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDeleteStudent}
          onViewDetails={handleViewDetails}
        />
      )}

      {currentView === 'form' && (
        <StudentForm
          student={editingStudent}
          onSubmit={editingStudent ? handleUpdateStudent : handleAddStudent}
          onCancel={handleCancel}
        />
      )}

      {currentView === 'details' && selectedStudent && (
        <StudentDetails
          student={selectedStudent}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;
