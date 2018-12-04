import session from 'supertest-session';
import app from '../../server';
import Question from '../../database/schemas/question';
import { Login_PW } from '../../config';

let testSession = null;
let questionId = null;
const errorMsg = (expected = 'EXPECTED', actual = 'ACTUAL') => { 
  throw new Error(`expected ${expected}, but got ${actual}`);
};

beforeAll((done) => {
  testSession = session(app);
  testSession.get(`/api/mockInterview/auth/?password=${Login_PW}&username=jest`)
    .expect(200)
    .end((err) => {
      if (err) return done(err);
      done();
    })
})

// deleteQuestionHelper,

describe('Question #1: ', () => {
  test('it should respond with 201 upon successful POST', (done) => {
    testSession.post('/api/mockInterview/main/questions')
      .send({ category: 'CSS', text: 'jestQuestion'})
      .expect(201)
      .end(done);
  });

  test('it should create the question', (done) => {
    Question.findOne({ category: 'CSS', text: 'jestQuestion'})
      .then((res) => {
        if (!res.text) return errorMsg();
        if (res.text) {
          questionId = res._id;
          done();
        }
      })
  });
})

describe('Question #2: ', () => {
  test('it should respond with 204 upon successful PATCH', (done) => {
    testSession.patch('/api/mockInterview/main/questions')
      .send({ id: questionId, text: 'jestQuestion #2'})
      .expect(204)
      .end(done);
  });

  test('it should update the question', (done) => {
    Question.findOne({ category: 'CSS', text: 'jestQuestion #2'})
      .then((res) => {
        if (!res.text) return errorMsg();
        done();
      })
  });
})

