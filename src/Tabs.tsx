import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from '@chakra-ui/react';
import { useState } from 'react';
import TaskList from './TaskList';

function TabsContent() {
  const dataTab = [
    {
      id: 1,
      label: 'All',
      content: <TaskList />,
    },
    {
      id: 2,
      label: 'Active',
      content: 'Active list',
    },
    {
      id: 3,
      label: 'Completed',
      content: 'Completed list',
    },
  ];
  const [tabIndex, setTabIndex] = useState(0);

  console.log(tabIndex);

  return (
    <Tabs isFitted mt="25px" onChange={(index) => setTabIndex(index)}>
      <TabList>
        {dataTab.map((item) => (
          <Tab key={item.id} _selected={{ color: 'white', bg: 'blue.500' }}>
            <Heading
              as="h2"
              fontSize="20px"
              letterSpacing="1px"
              fontWeight="500"
            >
              {item.label}
            </Heading>
          </Tab>
        ))}
      </TabList>
      <TabPanels p="2rem">
        {dataTab.map((item) => (
          <TabPanel key={item.id}>{item.content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

export default TabsContent;
