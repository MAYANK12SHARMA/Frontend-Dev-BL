const API_URL = 'http://localhost:5000/students';

export const getAllStudents = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const getStudentById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

export const addStudent = async (student) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
  return await response.json();
};

export const updateStudent = async (id, student) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
  return await response.json();
};

export const deleteStudent = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
