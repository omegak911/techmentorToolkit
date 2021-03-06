import session from 'supertest-session';
import app from '../../server';
import Student from '../../database/schemas/student';
import { Login_PW } from '../../config';

let testSession = null;
let studentId = null;
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
    Student.findOne({ name: 'jestStudent' })
      .then(student => {
        if (!student || student.name !== 'jestStudent' || student.cohort !== 1) errorMsg('jestStudent + 1', `${student.name} + ${student.cohort}`);
        studentId = student._id;
        done();
      })
  });
})

describe('Student #2: ', () => {
  let _id = 'jestTest';
  let sessionQuestions = [{
      [_id]: {
        category: 'JSFundamentals',
        score: 10
      }
    }]

  test('it should receive 204 on successful PATCH', (done) => {
    testSession.patch('/api/mockInterview/main/student')
      .send({ _id: studentId, session: 1, sessionQuestions })
      .expect(204)
      .end(done);
  });

  test('it should add add a questionId to a student with a value', (done) => {
    testSession.get('/api/mockInterview/main/')
      .expect(200)
      .expect(res => {
        let { studentData } = res.body;
        let student = studentData[studentData.length - 1];
        if (!student.session['1'][0].jestTest) errorMsg('student to have questionId of jestTest', `${JSON.stringify(student.session)}`);
      })
      .end(done);
  });
})

describe('Student #3: ', () => {
  test('it should receive 202 on successful DELETE', (done) => {
    testSession.delete('/api/mockInterview/main/student')
      .send({ _id: studentId })
      .expect(202)
      .end(done);
  });

  test('it should remove a student after DELETE', (done) => {
    Student.findOne({ _id: studentId })
      .then(student => {
        if (student) errorMsg('student "jestStudent" to not exist', `${student.name}`);
        done();
      })
  });
})