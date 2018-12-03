import session from 'supertest-session';
import app from '../../server';
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

// addQuestionHelper,
// deleteQuestionHelper,
// updateQuestionHelper

describe('Question #1: ', () => {
  test('it should respond with 201 upon successful POST', (done) => {
    testSession.post('/api/mockInterview/main/questions')
      .send({ category: 'CSS', text: 'jestQuestion'})
      .expect(201)
      .end(done);
  });

  test('it should create the question', (done) => {
    testSession.get('/api/mockInterview/main/')
      .expect(200)
      .expect(res => {
        let { questionData } = res.body;
        let question = questionData[questionData.length - 1];
        if (question.category !== 'CSS' || question.text !== 'jestQuestion') errorMsg('category: CSS and text: "jestQuestion"', `category: ${question.category} and text: ${question.text}`);
      })
      .end(done);
  });


})
