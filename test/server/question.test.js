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

describe('Question #1: ', () => {
  test('it should respond with 201 upon successful POST', (done) => {
    testSession.post('/api/mockInterview/main/questions')
      .send({ category: 'CSS', question: 'jestQuestion', answer: 'jestAnswer'})
      .expect(201)
      .end(done);
  });

  test('it should create the question', (done) => {
    Question.findOne({ category: 'CSS', question: 'jestQuestion'})
      .then((res) => {
        if (!res.question) return errorMsg();
        questionId = res._id;
        done();
      })
  });
})

describe('Question #2: ', () => {
  test('it should respond with 204 upon successful PATCH', (done) => {
    testSession.patch('/api/mockInterview/main/questions')
      .send({ _id: questionId, category: 'JSFundamentals', question: 'jestQuestion #2', answer: 'jestAnswer'})
      .expect(204)
      .end(done);
  });

  test('it should update the question', (done) => {
    Question.findOne({ category: 'JSFundamentals', question: 'jestQuestion #2'})
      .then((res) => {
        if (!res.question) return errorMsg();
        done();
      })
  });
})

describe('Question #3: ', () => {
  test('it should respond with 202 upon successful DELETE', (done) => {
    testSession.delete('/api/mockInterview/main/questions')
      .send({ _id: questionId })
      .expect(202)
      .end(done);
  });

  test('it should delete the question', (done) => {
    Question.findOne({ _id: questionId })
      .then((res) => {
        if (res) return errorMsg();
        done();
      })
  });
})