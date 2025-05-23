import * as React from 'react';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const settings = {
  height: 220,
  series: [{ data: [60, -15, 66, 68, 87, 82, 83, 85, 92, 75, 76, 50, 91] }],
  margin: { top: 20, bottom: 10 },
};

// Extend a value to match a multiple of the step.
function extend(value, step) {
  if (value > 0) {
    // If >0 go to the next step
    return step * Math.ceil(value / step);
  }
  // If <0 go to the previous step
  return step * Math.floor(value / step);
}

export default function CustomDomainYAxis() {
  const [domainLimit, setDomainLimit] = React.useState('nice');

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        select
        value={domainLimit}
        onChange={(event) => setDomainLimit(event.target.value)}
        label="domain limit"
        sx={{ minWidth: 150, mb: 2 }}
      >
        <MenuItem value="nice">nice</MenuItem>
        <MenuItem value="strict">strict</MenuItem>
        <MenuItem value="function">function</MenuItem>
      </TextField>
      <BarChart
        yAxis={[
          {
            domainLimit:
              domainLimit === 'function'
                ? (min, max) => ({
                    min: extend(min, 10),
                    max: extend(max, 10),
                  })
                : domainLimit,
          },
        ]}
        {...settings}
      />
    </Box>
  );
}
