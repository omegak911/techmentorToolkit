import session from 'supertest-session';
import app from '../../server';
import Mentor from '../../database/schemas/mentors';
import { Login_PW, Create_PW } from '../../config';

let testSession = null;
const errorMsg = (expected = 'EXPECTED', actual = 'ACTUAL') => { 
  throw new Error(`expected ${expected}, but got ${actual}`);
};

beforeEach((done) => {
  testSession = session(app);
  testSession.get(`/api/mockInterview/auth/?password=${Login_PW}&username=jest`)
    .expect(200)
    .end((err) => {
      if (err) return done(err);
      return done();
    })
})

afterAll(async(done) => {
  await Mentor.deleteMany({ name: 'jest' });
  done();
})

describe('Mentor #1: ', () => {
  test('it should receive 201 on successful POST', (done) => {
    testSession.post('/api/mockInterview/main/mentor')
      .send({ name: 'jest', password: Create_PW })
      .expect(201)
      .end(done);
  });

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

describe('Mentor #1: ', () => {
  test('it should receive 201 on successful POST', (done) => {
    testSession.post('/api/mockInterview/main/admin')
      .send({ name: 'jest', password: Create_PW })
      .expect(201)
      .end(done);
  });

  test('it should create the mentor', (done) => {
    testSession.get('/api/mockInterview/main/')
      .expect(200)
      .expect(res => {
        let { adminData } = res.body;
        let mentor = adminData[adminData.length - 1];
        console.log(mentor)
        if (mentor.name !== 'jest' || mentor.students.adminLvl !== 'boss') errorMsg('jest + boss', `${mentor.name} + ${mentor.students.adminLvl}`);
      })
      .end(done);
  });
})