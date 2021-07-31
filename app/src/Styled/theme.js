import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
    color: {
        primary: {
            main: '#18AC4F',
            light: '#25E06B',
            dark: '#0A411F',
            extraLight: '#F3F6FB',
        },
        secondary: '#F5F5F5',
        white: '#fff',
        dark: '#4D4D4D',
        darkTransparent: 'rgba(0, 0, 0, 0.3)',
        light: '#F9F9F9',
        gray: '#E7E7E9',
    },

    shadow: {
        sm: '1px 2px 5px #E7E7E9',
    },
    border: {
        primary: '1px solid #18AC4F',
        sm: '1px solid #E7E7E9',
        md: '2px solid #E7E7E9',
        lg: '5px solid #25E06B',
    },
};

const ThemeProvider = ({ children }) => (
    <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export default ThemeProvider;
