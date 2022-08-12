import express from 'express'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

let users = [];


//create a random id 

function randomNumber(){
  Math.floor(math.random()* 10000000);
}


//to create user
app.post('/user', (req, res) => {

 

 let newUser= {
  id : randomNumber(),
  name : req.body.name,
  password : req.body.password
 }

 users.push(newUser);
  
res.send("user is created");
})

app.get('/users', (req, res) => {
  
res.send(users)
})

//client fala id ka user get krna chahta h tw  oski bheji hui userid hmay req.params.userid is me mile g

app.get('/user/userId', (req, res) => {
  let userId = req.params.userId;

  let isFound = false;

  for(i= 0 ; i <users.length ; i++){
    if(users[i].id == userId){
      req.send(users[i]);
      isFound = true
      break;
    }
  }
    if (!isFound){
      res.send("user not found");
    }
  })
  

//modify user

app.put('/user/userId', (req, res) => {

  let userId = req.params.userId;
  let userIndex = -1;

  for(i= 0 ; i <users.length ; i++){
    if(users[i].id == userId){
    users = i ;

      break;
    }

    //agr req.body me password bheja h modification kliye tw modify krdo
    if(userIndex === -1){
      res.send("user not found")
    }else{
      if(req.body.name){
        users[userIndex].name = req.body.name;
      }
      if(req.body.password){
        users[userIndex].name = req.body.password;
      }
    
    }
  }
  // is me jo modify kiya hota h wo poora bhj dety 
res.send(users[userIndex]);
})

app.delete('/user/userId', (req, res) => {

  userId = req.params.userId;
  let userIndex = -1;

  if(userIndex == -1){
    res.send("user not found");
  }else{
    users.splice(userIndex , 1);
    res.send("user is deleted")
  }

  
res.send('')
})

app.delete('/users', (req, res) => {
  
  users = [];
  res.send("all user are deleted")
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