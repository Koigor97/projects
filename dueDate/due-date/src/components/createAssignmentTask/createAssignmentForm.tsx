import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { TaskTitleField } from './taskTitleField';
import { TaskDescriptionField } from './taskDescriptionField';

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
      </Stack>
    </Box>
  );
};
