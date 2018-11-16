import express from 'express';
import path from 'path';
import parser from 'body-parser';

import router from './router';

const app = express();
const port = 3003;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.use('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/dist/index.html')));

app.listen(port, () => console.log(`server is listening on port ${port}`));