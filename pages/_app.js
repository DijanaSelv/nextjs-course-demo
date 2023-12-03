import "../styles/globals.css";
import Layout from "../components/layout/Layout";

// APP JS ACTS AS ROOT COMPONENT - it recieves props, uses obj destructuring to pull out info and it pulls out component and page props. It's passed automatically in the app component by next js.
//we can use this to wrap this component with layout so we don't do it on every page.
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
