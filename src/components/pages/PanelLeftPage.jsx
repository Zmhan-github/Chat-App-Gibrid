import React from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Left Panel" />
    <List>
      <ListItem link="/friends/" title="Чаты" view="#main-view" panelClose></ListItem>
      <ListItem link="/form/" title="Контакты" view="#main-view" panelClose></ListItem>
      <ListItem link="/login/" title="Login" view="#main-view" panelClose></ListItem>
    </List>
  </Page>
);
