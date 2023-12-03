import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

//meetup data does not change often, we don't have edit, and even if we had, it would not be every second.

//but here the problem is: this is a dynamic page, when we fetch data we need to identify which meetup we need. Ex. its Id. Id is in the URl,
//USE ROUTER WILL NOT WORK : we usually it with useRouter hook and query property. But use Router can only be sued in the component function, not in staticProps function.
//for this we need context (in get static props it doesn't have request repsonse, ama it has params key. context.params - object where the identifiers will be properties and the values are the values encoded in the url.

//ERROR: getStaticPaths is required: another function, that we need to export in a page component path if it's a dynamic page and we're using get static props. Not for get server side props and not for using neither of them.
//why? With props, a page is pregenerated during the build process. For the dynamic page it needs tp oregenerate all versions of that dynamic page in advance for all the supported ids. It needs to know for which values it needs to pregenerate them during the build process.
//it returns object where we describe all the dynamic segment values, returns object with path key - array of object - one object for every dynamic page :params key object with all keys (ako se nested pokje natre), tuka samo po edno.
//we will not hardcode, but fetch it from a database and generate it dynamically.

//Error: fallback key:
//next to paths key we need to return fallback key: tells next js whether your paths array contains all supported parameter values, or just some of them. False means it contains all supported meetup values (if a user enters something random sho ne e na listata kje pokazhi 404) ako e true, next js will generate something for the request i da ne e dolu vo paths navedeno. True e korisno ako podocna ima novi stvari da generira as new requests are coming in. Tuka ne ni trebe.

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://dijananas:dijananas@cluster0.mket2ir.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  //pass first object as empty, (find all object, we put here criteria), pass second argument to define which fields we need to return - {_id: 1} this means only include the ID but no other field values. WE're only fetching the ids.
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  //this takes us to that path vo url, it puts the id in the url but does not fetch the data. Oti e vaka glupo.
  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  //fetch data for a single meetup
  const client = await MongoClient.connect(
    "mongodb+srv://dijananas:dijananas@cluster0.mket2ir.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  //pass first object as empty, (find all object, we put here criteria), pass second argument to define which fields we need to return - {_id: 1} this means only include the ID but no other field values. WE're only fetching the ids.
  //find one finds one document,we pass object on what to search we can pass the fields names (title, id, description) and the values we need for them.
  //we wrapt the meetupId with ObjectId imported from Mongo db jer ne moj da go naj ko string. this is stupid. To convert it to object. Posle dolu vo props we need to convert it back to a string.
  const obId = new ObjectId(meetupId);

  const selectedMeetup = await meetupsCollection.findOne({
    _id: obId,
  });

  client.close();
  console.log(selectedMeetup._id);

  // console.log(meetupId, "from getstaticprops in details page");
  //this will be logged in the terminal, not the browser becausae it's server side code.
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

//then we pass this as props pogore za da gi displaynime fo meetupDetails component.

export default MeetupDetails;
