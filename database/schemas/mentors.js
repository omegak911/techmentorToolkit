import db from '..';
import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({
  name: String,
  students: {
    adminLvl: {
      type: String,
      default: 'mentor'
    }
  }
}, {
  strict: false
});

const Mentor = mongoose.model('Mentor', mentorSchema);

export default Mentor;