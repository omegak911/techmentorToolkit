import db from '../index';
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  cohort: Number,
  questions: {
    default: { 
      JSFundamentals: {}, //ideally, we have the question # as key and how well they did out of 10
      CSS: {},
      HTML: {},
      Database: {},
      BH: {},
    }
  },
});

const Student = mongoose.model('Student', studentSchema);

export default Student;