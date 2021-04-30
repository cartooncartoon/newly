import { AppProps } from 'next/app';
import React from 'react';
import '@/styles/global.css';
import Layout from '@/../components/Layout';

const themes = {
  light: {
    foreground: `#000000`,
    background: `white`,
    outline: `lightgray`,
  },
  dark: {
    foreground: `rgba(255, 255, 255, 0.87)`,
    background: `rgb(18, 18, 18)`,
    outline: `rgba(255, 255, 255, 0.1)`,
  },
};

export const ThemeContext = React.createContext(themes.light);

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState(themes.light);
  return (
    <ThemeContext.Provider value={theme}>
      <Layout setTheme={setTheme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  );
}
