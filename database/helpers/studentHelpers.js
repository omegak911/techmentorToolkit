import Student from '../schemas/student.js';

const addStudentHelper = (name, cohort) => new Student({ name, cohort }).save();

const deleteStudentHelper = (_id) => Student.deleteOne({ _id });

const getAllStudentsHelper = () => Student.find({});

// const updateStudentHelper = (name, objString, value) => Student.updateOne({ name }, { $set: { [objString]: value }});

const updateStudentHelper = (_id, objString, sessionQuestions) => Student.updateOne({ _id }, { $set: { [objString]: sessionQuestions }});

export {
  addStudentHelper,
  deleteStudentHelper,
  getAllStudentsHelper,
  updateStudentHelper
}
