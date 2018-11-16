import request from 'request';
import { githubToken } from '../config';

let getNameAndPic = (username, callback) => {
  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${username}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${githubToken}`,
      'Accept': 'application/vnd.github.v3+json',
    },
  };

  request(options, callback);
};

export default getNameAndPic;