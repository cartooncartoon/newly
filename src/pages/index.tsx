import Discover from '@/../components/DiscoverElements/Discover';
import Footer from '@/../components/HomeElements/Footer';
import HomeBG from '@/../components/HomeElements/HomeBG';
import React from 'react';
import { ThemeContext } from './_app';

export default function Home() {
  const theme = React.useContext(ThemeContext);
  return (
    <div style={{ background: theme.background, color: theme.foreground }}>
      <HomeBG />
      <Discover theme={theme} />
      <Footer />
    </div>
  );
}
