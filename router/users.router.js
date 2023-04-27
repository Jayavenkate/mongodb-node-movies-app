import express from "express"; // "type": "module"
import bcrypt from "bcrypt";

import { createUsers } from "../service/users.service.js";
const router = express.Router();
//post method
async function generateHashedPassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword =  await bcrypt.hash(password,salt);
  console.log(salt);
  console.log(hashedPassword);
  return hashedPassword
}

// 
router.post("/signup", async function (request, response) {
  const {username,password} = request.body;
  const hashedPassword=await generateHashedPassword(password);
  
  const result = await createUsers({
    username:username,
    password:password,
  });
  response.send(result);
});



export default router;