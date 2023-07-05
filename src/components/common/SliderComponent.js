import React, { Fragment } from 'react'
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

// Props Destructuring
const SliderComponent = ({ defaultValue, min, max, step, onChange, value }) => {
  return (

    <Fragment>
      {/* React.Fragment fake DOM */}
      <Stack gap={1}>
        <Typography variant='subtitle2'> Home Value </Typography>
        <Typography variant='h5'> R$ 3000 </Typography>
      </Stack>
      <Slider defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Stack direction='row' gap={1} justifyContent={'space-between'}>
      <Typography color='text.secondary'> R$ 1000 </Typography>
      <Typography> R$ 10000 </Typography>
      </Stack>
    </Fragment>
  );
};

export default SliderComponent