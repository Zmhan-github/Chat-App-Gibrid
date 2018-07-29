import React from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';

export default () => {
 return (
 <Page>
  <Navbar title="Right Panel" />
  <List>
    <ListItem link="/friends/" title="Чаты" view="#main-view" panelClose></ListItem>
    <ListItem link="/login/" title="Login" view="#main-view" panelClose></ListItem>
    <ListItem link="/dialog/" title="Dialog" view="#main-view" panelClose></ListItem>
  </List>
</Page>
)
}
