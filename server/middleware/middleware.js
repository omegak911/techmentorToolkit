import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session'
import MongoStore from 'connect-mongo';

import db from '../../database/index';
import { SECRET } from '../../config';

const store = MongoStore(session);

const corsOptions = {
  origin: `http://localhost:3666`,
  methods: 'GET,POST,PATCH,DELETE'
};

const sessionOptions = {
  secret: SECRET,
  cookie: { maxAge: 300000 },  //five minutes
  resave: false,
  saveUninitialized: false,
  store: new store({ mongooseConnection: db })
};

const middleware = [
  helmet(),
  cors(corsOptions),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  session(sessionOptions),
];

export default middleware;