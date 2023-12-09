import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../createAssignmentTask/enums/Status';
import { correctBorderColors } from './helperFunctions/correctBorderColor';
import { correctLabel } from './helperFunctions/correctLabel';
import PropTypes from 'prop-types';

export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { status = Status.completed, count = 0 } = props;

  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: `${correctBorderColors(status)}`,
          }}
        >
          <Typography color={'#fff'} variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color={'#fff'}
          fontWeight={'bold'}
          fontSize={'20px'}
          variant="h5"
        >
          {correctLabel(status)}
        </Typography>
      </Box>
    </>
  );
};

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([Status.todo, Status.inProgress, Status.completed]),
};
