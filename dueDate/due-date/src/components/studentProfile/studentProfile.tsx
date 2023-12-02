import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

interface IProfile {
  name: string;
}
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

export const Profile: FC<IProfile> = (props): ReactElement => {
  const { name = 'Sam' } = props;

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
          {`${name.substring(0, 1).toUpperCase()}`}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        {`Welcome, ${name}`}
      </Typography>
      <Typography variant="body1" color="text.primary">
        Student ID: 3499064 - Student Year: Freshman
      </Typography>
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};

{
  /* <svg class="feature__icon">
  <use xlink:href="img/sprite.svg#icon-global"></use>
</svg>; */
}
