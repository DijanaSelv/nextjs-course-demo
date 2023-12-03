// /api/new-meetup

import { MongoClient } from "mongodb";

//it recieved request and response object
//req data about incoming request. We can get things like header, body (the data that is sent)  and method (to find out what request is sent, ex post)
//response needed for sending back a response.

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    //const { title, image, address, description } = data;

    //store in a database - like mongo DB atlas

    //never run on client side, to not expose credentials.

    //returns object
    const client = await MongoClient.connect(
      "mongodb+srv://dijananas:dijananas@cluster0.mket2ir.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    //on clent call bd method to get ahold of that database, if it doesn't exist it will be created.
    const db = client.db();

    //get ahold of the collections, so colleciton method and pass a name, if it doesn't exist it's created on the fly.
    //collections is like tables on sql, and documents will be entries in that tables. Single meetup will be a single document, so the colleciton has multiple documents.
    const meetupsCollection = db.collection("meetups");

    //query command to insert one new document in the collection. A document is a JS object.
    //insert one returns a promise, so we await it.
    //result will be object with the automatically generated id primer.
    const result = await meetupsCollection.insertOne(data);
    console.log(result, "result from mongo db inster one");

    //close db connection
    client.close();

    //use response obj to send back a response
    //res.status to set a http status code of the response. 201 is that sth is inserted sucessfully. And json method to prepare the json data that will be added to the ongoing response.
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
