import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { TaskTitleField } from './taskTitleField';
import { TaskDescriptionField } from './taskDescriptionField';
import { TaskDateField } from './taskDateField';
import { TaskSelectField } from './taskSelectField';
import { Priority } from './enums/Priority';
import { Status } from './enums/Status';

export const CreateAssignmentForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection={'column'}
      alignItems={'flex-start'}
      width={'100%'}
      px={4}
      my={6}
    >
      <Typography mb={2} component={'h2'} variant="h6">
        Create a Task:
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
        <Stack direction={'row'} spacing={2} sx={{ width: '100%' }}>
          <TaskSelectField
            label="Status"
            name="status"
            items={[
              { value: Status.todo, label: Status.todo.toUpperCase() },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            items={[
              { value: Priority.low, label: Priority.low },
              { value: Priority.normal, label: Priority.normal },
              { value: Priority.high, label: Priority.high },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
