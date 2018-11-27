import Mentor from '../schemas/mentors';

const addMentorHelper = name => new Mentor({ name }).save();

const addBossHelper = name => new Mentor({ name, 'students.adminLvl': 'boss' }).save();

const getAdminHelper = () => Mentor.find({});

const updateStudentCollectionHelper = (name, studentCollection) => Mentor.updateOne({ name }, { $set: { [studentCollection]: true }});

export {
  addMentorHelper,
  addBossHelper,
  getAdminHelper,
  updateStudentCollectionHelper
}