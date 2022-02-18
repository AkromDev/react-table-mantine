import { Tabs, Text } from "@mantine/core";
import { useState } from "react";
import AllFetchedOnce from "./Components/AllFetchedOnce";
import AllFetchedOnceMore from "./Components/AllFetchedOnceMore";
import PaginatedFetch from "./Components/PaginatedFetch";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs active={activeTab} onTabChange={setActiveTab}>
      <Tabs.Tab label="Fetch all once">
        <Text>This example fetches all serverside data once on component mount</Text>
        <AllFetchedOnce />
      </Tabs.Tab>
      <Tabs.Tab label="Fetch all once - more">
        <Text>This example is same as first one but with more functionality</Text>
        <AllFetchedOnceMore />
      </Tabs.Tab>
      <Tabs.Tab label="Paginated Fetch">
        <Text>This example fetches the incrementally using pagination</Text>
        <PaginatedFetch />
      </Tabs.Tab>
    </Tabs>
  );
};

export default App;