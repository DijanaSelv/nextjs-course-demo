//import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

/* const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://experience-macedonia.com/wp-content/uploads/2019/04/bitolamax.jpg",
    address: "Kaj Pasko, 7000 Bitola",
    descritption: "Da se najme kaj pasko pa kje zemime karti",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://cdn.eventinc.de/provider_pictures/pictures/000/230/385/cropped_webp/eventlocation-jan-mitch-rostock.webp?1574763660",
    address: "Jan and Mitch, Rostock center",
    descritption: "Na po edna kafica",
  },
]; */

function HomePage(props) {
  /* no need because we use Static Props 
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  //no dependencies, it will run only when the page is first loaded, never after that
  useEffect(() => {
    //send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []); */

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="a palace to save your meetups if you want to do something like that"
        />
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>;
    </Fragment>
  );
}

//by default next js prepares the pages. If we need to wait for data, we do this by exporting a special function in the page component file (doesn't work in other component files, only the pages). Mora da se vika get StaticProps, next js will look for that name and execute the function during the pre rendering process, before it calls the component function. It can be async, so next Js will wait for it to be resolved. We can put code that will only run on a server. Access file system, connect to a databse, etc. Any code will not end up  and execute on the client side (executes during the build pricess, not on the server and not on the client)

export async function getStaticProps() {
  //fetch data from an API or read data from files
  //then return object (MUST), we set props property, the object that the page will recieve as props
  //this is server side code, and usually ne mojme fetch vo server side code da klavame, ama next dozvolva. The code won't be exposed to the client, so we can directly put the code here, no need to send request to our own api route.
  //with importing mongo db next js put that code not on the client side.

  MongoClient.connect();

  //connect to the database and collection
  const client = await MongoClient.connect(
    "mongodb+srv://dijananas:dijananas@cluster0.mket2ir.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  //find method will find all the documents in that collection, async task returns a promise. To array to get back an array of documents.
  const meetups = await meetupsCollection.find().toArray();

  //we get error because the auto generated ID is an object that can't be returned as simple data like tihs. We need to map the array.

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    //revalidate unlocks a feature called incremental static generation, number of seconds next js will wait until it regenerates this page for an incoming request. it will be regenerated on the server at least in 10 seconds if there are request coming for this page.
    revalidate: 10,
  };
}

/* //regenerate page dynamically for every request. reserved name. This will not run during the build process , but always on the server after deployment. Runs on server, never client, we can run server side code, perform operations that use credentials that should not be exposed to users.
//this runs for every incoming request, no need for revalidate.
//context parameter - we have the request and response object. if we need for our code.
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  //fetch data prom APi or file system.
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
} */

export default HomePage;
