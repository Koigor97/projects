import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

// generating a random year and id
// const generateRandomIdAndYear = (): object => {
//   const academicYear: string[] = ['Freshman', 'Sophmore', 'Senior'];
//   let randomId = '';

//   for (let i = 0; i < 8; i++) {
//     const digit = Math.floor(Math.random() * 10); // Generate a random digit (0-9)
//     randomId += digit.toString();
//   }

//   const randomYear = Math.floor(Math.random() * 3);
//   const randomIdAndYear = {
//     id: randomId,
//     year: academicYear[randomYear],
//   };

//   return randomIdAndYear;
// };

// const randomData = generateRandomIdAndYear();

export const Profile: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Avatar
        sx={{
          width: '80px',
          height: '80px',
          backgroundColor: 'primary.main',
          marginBlockEnd: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          S
        </Typography>
      </Avatar>
      <InfoCard />
    </Box>
  );
};

const InfoCard: FC = (): ReactElement => {
  return (
    <>
      <Typography variant="h6" color="text.primary">
        Welcome, Sam
      </Typography>
      <Typography variant="body1" color="text.primary">
        Student ID: 3499064 - Student Year: Freshman
      </Typography>
    </>
  );
};
