import { Box, Tabs, Text } from "@mantine/core";
import { useState } from "react";
import TableClientsideData from "./Components/AllFetchedOnce";
import TableServersideData from "./Components/PaginatedFetch";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs active={activeTab} onTabChange={setActiveTab}>
      <Tabs.Tab label="Fetch all once">
        <Text>This example fetches all serverside data once on component mount</Text>
        <TableClientsideData />
      </Tabs.Tab>
      <Tabs.Tab label="Paginated Fetch">
        <Text>This example fetches the incrementally using pagination</Text>
        <TableServersideData />
      </Tabs.Tab>
    </Tabs>
  );
};

export default App;