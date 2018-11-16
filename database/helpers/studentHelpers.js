import Student from '../schemas/student.js';

const addStudentHelper = (name, cohort, callback) => {
  let student = new Student({ name, cohort });

  student.save((err, stud) => {
    if (err) console.error(err);
    callback();
  })
}

const deleteStudentHelper = (name, callback) => { //convert to thenables
  Student.deleteOne({ name }, (err) => {
    if (err) console.error(err);
    callback()
  });
}

const getAllStudentsHelper = (callback) => { //convert to thenables
  Students.find({}, (err, result) => {
    if (err) console.error(err);
    callback(result);
  });
}

const updateStudentHelper = (name, question, callback) => {
  Student.findOneAndUpdate({ name }, { question }, { upsert: true }, (err, doc) => {
    if (err) console.error(err);
    callback();
  });
}

export {
  addStudentHelper,
  deleteStudentHelper,
  getAllStudentsHelper,
  updateStudentHelper
}
