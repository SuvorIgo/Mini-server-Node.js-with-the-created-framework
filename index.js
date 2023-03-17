const Application = require('./framework/Application');
const filmRouter = require('./framework/routers/filmRouter');
const genreRouter = require('./framework/routers/genreRouter');
const jsonParser = require('./framework/middlewares/parseJSON');
const parseUrl = require('./framework/middlewares/parseUrl');

require('dotenv').config();

const port = process.env.PORT;
const host = process.env.HOST;

const app = new Application();

app.use(jsonParser);
app.use(parseUrl(`http://${host}:${port}`));

app.addRouter(filmRouter);
app.addRouter(genreRouter);

app.listen(port, () => console.log(`Server was started on port - ${port}`));