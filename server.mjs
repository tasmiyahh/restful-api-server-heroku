import express from 'express'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

let users = [];

app.post('/user', (req, res) => {

  console.log(req.body);

  users.push(req.body);
  
res.send("user is created");
})

app.get('/user', (req, res) => {
  
res.send(users)
})

app.put('/user', (req, res) => {
  
res.send('user is modified');
})

app.delete('/user', (req, res) => {
  
res.send('')
})







app.get('/', (req, res) => {
    console.log("ek req server pe aye ");
  res.send('Hello World!')
})

app.get('/profile', (req , res)=>{
  console.log("ek aur req server pe aye ");
  res.send('this is a profile!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})