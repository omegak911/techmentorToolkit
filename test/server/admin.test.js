import session from 'supertest-session';
import app from '../../server';
import Mentor from '../../database/schemas/mentors';
import { Login_PW, Create_PW } from '../../config';

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
      testSession.post('/api/mockInterview/main/mentor')
        .send({ name: 'jest', password: Create_PW })
        .expect(201)
        .end(done);
    })
})

afterAll(async(done) => {
  await Mentor.deleteMany({ name: 'jest' });
  await Mentor.deleteMany({ name: 'jestBoss' });
  done();
})

describe('Admin #1: ', () => {
  test('it should create the mentor', (done) => {
    testSession.get('/api/mockInterview/main/')
      .expect(200)
      .expect(res => {
        let { adminData } = res.body;
        let mentor = adminData[adminData.length - 1];
        if (mentor.name !== 'jest') errorMsg('jest', mentor.name);
      })
      .end(done);
  });
})

describe('Admin #2: ', () => {
  test('it should receive 201 on successful POST', (done) => {
    testSession.post('/api/mockInterview/main/admin')
      .send({ name: 'jestBoss', password: Create_PW })
      .expect(201)
      .end(done);
  });

  test('it should create an admin with lvl of "boss"', (done) => {
    testSession.get('/api/mockInterview/main/')
      .expect(200)
      .expect(res => {
        let { adminData } = res.body;
        let mentor = adminData[adminData.length - 1];
        if (mentor.name !== 'jestBoss' || mentor.students.adminLvl !== 'boss') errorMsg('jest + boss', `${mentor.name} + ${mentor.students.adminLvl}`);
      })
      .end(done);
  });
})

describe('Admin #3: ', () => {
  test('it should respond with 204 on successful patch', (done) => {
    testSession.patch('/api/mockInterview/main/mentor')
      .send({ name: 'jest', studentId: 'jestStudent', type: 'add' })
      .expect(204)
      .end(done);
  });

  test('it should add a student Id to a mentor\'s student collection', (done) => {
    testSession.get('/api/mockInterview/main/')
      .expect(200)
      .expect(res => {
        let { adminData } = res.body;
        let mentor = adminData[adminData.length - 2]; //cuz jestBoss should be the last
        if (!mentor.students.jestStudent) errorMsg('students.jestStudent: true', `${mentor.students}`);
      })
      .end(done);
  });

  test('it should respond with 204 on successful patch', (done) => {
    testSession.patch('/api/mockInterview/main/mentor')
      .send({ name: 'jest', studentId: 'jestStudent', type: 'delete' })
      .expect(204)
      .end(done);
  });

  test('it should delete a student Id to a mentor\'s student collection', (done) => {
    testSession.get('/api/mockInterview/main/')
      .expect(200)
      .expect(res => {
        let { adminData } = res.body;
        let mentor = adminData[adminData.length - 2]; //cuz jestBoss should be the last
        if (mentor.students.jestStudent) errorMsg('students.jestStudent to not exist', `${mentor.students}`);
      })
      .end(done);
  });
})