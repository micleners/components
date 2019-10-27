import {link as linkColors} from './colors';

export const fontFamily = 'Quicksand, sans-serif';
export const fontSize = 24;
export const link = {
  textDecoration: 'none',
  color: linkColors.default,
  ':hover': {
    textDecoration: 'underline',
    color: linkColors.hover
  }
};
