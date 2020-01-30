import react from "react";
import { Query } from "@apollo/react-hooks";
import { HOME_PAGE } from "./queries";

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return <span>loading</span>;
      if (error) return <span>something happened</span>;
      if (data) {
        console.log(data);
        return <span>good</span>;
      }
    }}
  </Query>
);

export default Home;
