export type ThemeType = typeof light // This is the type definition for my theme object.

const common = {
  margins: {
    xs: '5px',
    sm: '10px',
    md: '15px',
    lg: '20px',
    xl: '30px',
    xxl: '70px',
  },
  duration: {
    linkBottom: 0.2,
  },
}

export const light = {
  colors: {
    primary: 'white',
    secondary: 'black',
  },
  ...common,
}

export const dark: ThemeType = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
  ...common,
}

const theme = light // set the light theme as the default.
export default theme
