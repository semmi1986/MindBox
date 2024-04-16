import { Box, Checkbox, Heading, Stack } from '@chakra-ui/react';
// import { useState } from 'react';

function TaskList() {
  //   const [valueStatus, setValueStatus] = useState(false);

  const taskList = [
    { id: 1, task: 'Task1' },
    { id: 2, task: 'Task2' },
    { id: 3, task: 'Task3' },
  ];
  return (
    <Stack>
      {taskList.map((item) => (
        <Box
          key={item.id}
          w="100%"
          p="5px 0 10px"
          borderBottom="1px solid black"
        >
          <Checkbox value={item.id}>
            <Heading
              as="h2"
              fontSize="40px"
              letterSpacing="3px"
              fontWeight="300"
            />
            {item.task}
          </Checkbox>
        </Box>
      ))}
    </Stack>
  );
}

export default TaskList;
