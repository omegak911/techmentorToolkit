// addStudent,
// deleteStudent,
// updateStudent,

import session from 'supertest-session';
import app from '../../server';
import Student from '../../database/schemas/student';
import { Login_PW } from '../../config';

let testSession = null;
const errorMsg = (expected = 'EXPECTED', actual = 'ACTUAL') => { 
  throw new Error(`expected ${expected}, but got ${actual}`);
};

beforeAll((done) => {
  testSession = session(app);
  testSession.get(`/api/mockInterview/auth/?password=${Login_PW}&username=jest`)
    .expect(200)
    .end((err) => {
      if (err) return done(err);
      testSession.post('/api/mockInterview/main/student')
        .send({ name: 'jestStudent', cohort: 1 })
        .expect(201)
        .end(done);
    })
})

describe('Student #1: ', () => {
  test('it should create the student', (done) => {
    testSession.get('/api/mockInterview/main/')
      .expect(200)
      .expect(res => {
        let { studentData } = res.body;
        let student = studentData[studentData.length - 1];
        if (student.name !== 'jestStudent' || student.cohort !== 1) errorMsg('jestStudent + 1', `${student.name} + ${student.cohort}`);
      })
      .end(done);
  });
})