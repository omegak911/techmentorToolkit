import getNameAndPic from '../../helpers/githubHelper';

const getNameAndPicCtrl = (req, res) => {
  let { query: students } = req.query;
  let result = []

  const syncFunc = () => {
    let student = students.pop();

    getNameAndPic(student, (err, { body }) => {
      body = JSON.parse(body);
      let { name, avatar_url } = body;
      name = name || student;
      result.push({ name, photo: avatar_url });
      if (err) {
        console.error('error: ', err);
        res.status(404).send('failed request');
      } else if (students.length > 0) {
        syncFunc();
      } else {
        res.status(200).send(result);
      }
    })
  }
  syncFunc();
}

export default getNameAndPicCtrl;