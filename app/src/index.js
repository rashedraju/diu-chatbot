import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './Styled/globalStyle';
import ThemeProvider from './Styled/theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
