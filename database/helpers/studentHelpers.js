import Student from '../schemas/student.js';

const addStudentHelper = (name, cohort) => new Student({ name, cohort }).save();

const deleteStudentHelper = (name) => Student.deleteOne({ name });

const getAllStudentsHelper = () => Student.find({});

// const updateStudentHelper = (name, objString, value) => Student.updateOne({ name }, { $set: { [objString]: value }});

const updateStudentHelper = (name, objString, question) => Student.updateOne({ name }, { $set: { [objString]: question }});

export {
  addStudentHelper,
  deleteStudentHelper,
  getAllStudentsHelper,
  updateStudentHelper
}
