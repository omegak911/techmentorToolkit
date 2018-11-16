import db from '../index';
import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  category: String,
  text: String
});

const Question = mongoose.model('Question', questionSchema);

export default Question;