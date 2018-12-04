import db from '..';
import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  category: String,
  question: String,
  answer: String
});

const Question = mongoose.model('Question', questionSchema);

export default Question;