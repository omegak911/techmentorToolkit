import session from 'supertest-session';
import app from '../../server/index';
import { Login_PW } from '../../config';

var testSession = null;

beforeEach(() => {
  testSession = session(app);
});

describe('Authentication', () => {
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

describe('Authentication', () => {
  var authenticatedSession = null;

  beforeEach((done) => {
    testSession.get(`/api/mockInterview/auth/?password=${Login_PW}&username=jest`)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        authenticatedSession = testSession;
        return done();
      })
  });
  
})