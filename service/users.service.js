import { client } from "../index.js";

export async function createUsers(data) {
  return await client.db("b42wd2").collection("users").insertOne(data);
}
