import Item from '@/../components/ItemElements/Item';
import React from 'react';
import { ThemeContext } from '../_app';

const ItemPage = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <div style={{ background: theme.background, color: theme.foreground }}>
      <Item />
    </div>
  );
};

export default ItemPage;
