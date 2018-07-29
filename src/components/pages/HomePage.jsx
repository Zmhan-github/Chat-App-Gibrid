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

export default () => {
 return (
  <Page>
  <Navbar>
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
 )
}
