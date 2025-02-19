import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67898461003db59f1104");

const account = new Account(client);

export { account, ID };
