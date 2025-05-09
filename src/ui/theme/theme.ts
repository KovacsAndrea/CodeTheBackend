import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      phones: 0,
      small_tablets: 600,
      tablets_small_laptops: 900,
      desktops: 1280,
      large_desktops: 1536,
      fullHD: 1920,
      qHD: 2560,
      uHD: 3840,
    },
  },
});

export default theme;