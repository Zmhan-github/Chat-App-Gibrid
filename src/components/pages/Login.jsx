import React, { Component } from 'react';
import { Page,  List, ListButton, ListItem, Input, LoginScreenTitle, Label, BlockFooter } from 'framework7-react';

import { httpAuth } from './../../configUrl'


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      password: '',
    };
  }

  render() {
    return (
      <Page noToolbar noNavbar noSwipeback loginScreen>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
          <ListItem>
            <Label>Phone</Label>
            <Input type="number" placeholder="Your phone" onInput={(e) => {
              this.setState({ phone: e.target.value});
            }}></Input>
          </ListItem>
          <ListItem>
            <Label>Password</Label>
            <Input type="password" placeholder="Your password" onInput={(e) => {
              this.setState({ password: e.target.value});
            }}></Input>
          </ListItem>
        </List>
        <List>
          <ListButton onClick={this.signIn.bind(this)}>ВОЙТИ</ListButton>
          <ListItem link="/register/" title="Регистрация" view="#main-view" panelClose></ListItem>
          <BlockFooter></BlockFooter>
        </List>
      </Page>
    )
  }
  signIn() {
    const self = this;
    const app = self.$f7;
    const router = self.$f7router;

    let data = this.state;

    this.$request.setup({
      contentType: 'application/json'
    })

    console.log("send ", data)

    this.$request.post(httpAuth + "/auth", JSON.stringify(data), function (data) {
      var dataParse = JSON.parse(data);

      console.log("Auth data ", dataParse)

      if (dataParse.success){
        app.data.token = dataParse.success.result.token;
        app.dialog.alert(`SUCCESS`, () => {
          router.navigate("/friends/");

        });
      }

      if (dataParse.error){
        console.log("router", app.data.token = dataParse);
        app.dialog.alert(`${dataParse.error.message}`, () => {
          // router.back();
        });
      }

    });


  }
}

export default Login;
