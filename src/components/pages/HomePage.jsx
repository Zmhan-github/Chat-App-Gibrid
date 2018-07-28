import React from 'react';
import {
    Page,
    Navbar,
    NavTitle,
    NavRight,
    Link,
    Toolbar,
    Block
} from 'framework7-react';

export default () => (
  <Page>
    <Navbar>
      {/* <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"></Link>
      </NavLeft> */}
      <NavTitle>Chat App</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right"></Link>
      </NavRight>
    </Navbar>
    <Block strong>
      <p>Главная страница</p>
    </Block>
    <Toolbar>
      <Link panelOpen="/friends/" >Контакты</Link>
    </Toolbar>
  </Page>
);
