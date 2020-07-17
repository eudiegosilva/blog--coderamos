export const colors = {
  dark: {
    primary: '#000000',
    secondary: '#33A1F2',
    border: '#111111',
    link: '#F81CE5',
    text: '#FFFFFF',
  },
  light: {
    primary: '#FFFFFF',
    secondary: '#33A1F2',
    border: '#CCCCCC',
    link: '#F81CE5',
    text: '#222222',
  },
}

export const grid = {
  breakpoints: {
    xs: 500,
    sm: 736,
    md: 980,
    lg: 1200,
  },
}

export const mediaQueries = {
  xs: `(max-width: ${grid.breakpoints.xs}px)`,
  sm: `(max-width: ${grid.breakpoints.sm}px)`,
  md: `(max-width: ${grid.breakpoints.md}px)`,
  lg: `(max-width: ${grid.breakpoints.lg}px)`,
}

export default { colors, grid, mediaQueries }
