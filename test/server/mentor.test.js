const session = require('supertest-session');
const app = require('../../server/index');
const { Login_PW } = require('../../config');

var testSession = null;

describe('Authentication', () => {
  beforeEach(() => {
    testSession = session(app);
  });
  
  test('it should decline request if password is incorrect', (done) => {
    testSession.get('/api/mockInterview/auth')
      .send({ params: { password: 'test' }})
      .expect(404)
      .end(done)
  });

  test('it should accept request if password is correct', (done) => {
    testSession.get(`/api/mockInterview/auth/?password=${Login_PW}&username=jest`)
      .expect(200)
      .end(done)
  });
})

