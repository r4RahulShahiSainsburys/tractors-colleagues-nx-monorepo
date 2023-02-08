import express from 'express';
import {tractorsColleagues} from './tractors-store/tractors.colleagues';
import cors from 'cors';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' , tractorsColleagues : tractorsColleagues});
});


//http://localhost:3000/api/tractors-colleagues/search?name=audi

app.get('/api/tractors-colleagues/search', (req, res) => {
  const { name } = req.query;
  const filteredtractorsColleagues = tractorsColleagues.filter((Colleague) => Colleague.name.toLowerCase().includes((name as string).toLowerCase()));
  res.send(filteredtractorsColleagues);
});

app.listen(port, () => {
  console.log(`[ ready ] http://localhost:${port}`);
});
