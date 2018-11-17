import db from '../index';
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  cohort: Number,
  questions: {
    JSFundamentals: {
      average: {
        type: Number,
        default: 0
      }
    }, //ideally, we have the question # as key and how well they did out of 10
    CSS: {
      average: {
        type: Number,
        default: 0
      }
    },
    HTML: {
      average: {
        type: Number,
        default: 0
      }
    },
    Database: {
      average: {
        type: Number,
        default: 0
      }
    },
    BH: {
      average: {
        type: Number,
        default: 0
      }
    },
  },
});

const Student = mongoose.model('Student', studentSchema);

export default Student;