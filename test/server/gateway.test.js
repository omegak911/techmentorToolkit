import session from 'supertest-session';
import app from '../../server';
import { Login_PW } from '../../config';

let testSession = null;
const errorMsg = (expected = 'EXPECTED', actual = 'ACTUAL') => { 
  throw new Error(`expected ${expected}, but got ${actual}`);
};

beforeEach(() => {
  testSession = session(app);
});

describe('Authentication #1: ', () => {
  test('it should decline request if password is incorrect', (done) => {
    testSession.get('/api/mockInterview/auth/?password=fakepassword&username=jest')
      .expect(404)
      .end(done)
  });

  test('it should decline request if have not yet been authenticated', (done) => {
    testSession.get('/api/mockInterview/main/')
      .expect(404)
      .end(done)
  });

  test('it should accept request if password is correct', (done) => {
    testSession.get(`/api/mockInterview/auth/?password=${Login_PW}&username=jest`)
      .expect(200)
      .end(done)
  });
})

describe('Authentication #2: ', () => {
  beforeEach((done) => {
    testSession.get(`/api/mockInterview/auth/?password=${Login_PW}&username=jest`)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      })
  });

  test('it should accept a request after auth + send back data', (done) => {
    testSession.get('/api/mockInterview/main/')
      .expect(200)
      .expect((res) => {
        let { adminData, studentData, questionData } = res.body;
        if (adminData && studentData && questionData) return;
        errorMsg('adminData + studentData + questionData', 'false');
      })
      .end(done);
  });
})