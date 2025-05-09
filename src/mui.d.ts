import { BreakpointOverrides } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs:false,
    sm: false,
    md: false,
    lg: false,
    xl:false,
    phones: true,
    small_tablets: true,
    tablets_small_laptops: true,
    desktops: true,
    large_desktops: true,
    fullHD: true,
    qHD: true,
    uHD: true,
  }
}