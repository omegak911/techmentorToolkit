import express from 'express';
import path from 'path';
import middleware from './middleware/middleware';
import router from './router';

const app = express();
const port = 3003;

app.use(...middleware);
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.use('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/dist/index.html')));

if (process.env.NODE_ENV !== 'jest') {
  app.listen(port, () => console.log(`server is listening on port ${port}`));
}

export default app;