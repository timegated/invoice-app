import express from 'express';

const app = express();
const PORT = 3001;

app.get('/', async (req: express.Request, res: express.Response) => {
  try {
    res.send({Msg: "Hello OK"})
  } catch (err) {
    console.error(err);
    throw err;
  }
});


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});