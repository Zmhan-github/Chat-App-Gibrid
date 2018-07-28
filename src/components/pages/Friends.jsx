import React, { Component } from 'react';
import { Page, Navbar,  List, ListItem, Block, Preloader } from 'framework7-react';


class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      user: [],
      loader: false,
      showPreloader: true
    };
  }

  componentDidMount() {
    fetch('http://otau.org/main/cors')
      .then(response => response.json())
      .then(data => this.setState({ friends: data.friends , user: data.user, loader: true}));
  }

  render(){
    return (
      this.state.loader ?
        <Page>
          <Navbar title="Чаты" backLink="Back"></Navbar>
          <List mediaList>
          {this.state.friends.map(item => 
              (
                <ListItem
                  key={item.id}
                  title={item.name + ' ' + item.lastname}
                  after={item.last_activity.slice(14)}
                  subtitle="Last messages not found."
                >
                  <img slot="media" alt={"image-" + item.key} src={'http://otau.org' + item.photo} width="44" />
                </ListItem>
              )
          )}
          </List>
        </Page>
      :
      <Page>
        <Navbar title="Чаты" backLink="Back"></Navbar>
        <Block className="text-align-center">
          <Preloader color="multi"></Preloader>
        </Block>
      </Page>
    )
  }
}

export default Friends;
