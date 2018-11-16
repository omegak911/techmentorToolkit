import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/mockinterviewtoolkit');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('mongodb is connected'));

export default db;