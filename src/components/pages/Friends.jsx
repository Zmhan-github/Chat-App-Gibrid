import React, { Component } from 'react';
import { Page, Navbar,  List, ListItem, Block, Preloader, Searchbar, Subnavbar } from 'framework7-react';
import Socket from './../../socket'


class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      user: [],
      loader: false,
      showPreloader: true,
      msg: [],
      connected: false
    };
  }

  getDialog(id){
    let msg = {
      uid: id
    }

    this.socket.emit('uid', msg);
  }

  componentDidMount() {
    const self = this;
    const app = self.$f7;
    console.log("dataParse: ", app.data.token);

    this.$request.setup({
      contentType: 'application/json'
    })

    // this.$request.post(httpAuth + "/auth", JSON.stringify(data), function (data) {
    //   var dataParse = JSON.parse(data);
    // });


    this.$request.get('http://otau.org/main/cors', { foo:'bar', id:5 }, function (data) {
      var dataParse = JSON.parse(data);
      self.setState({ friends: dataParse.friends , user: dataParse.user, loader: true})
    });

    let socket = this.socket = new Socket();
    socket.on('Connect', this.onConnect.bind(this));
    socket.on('Disconnect', this.onDisconnect.bind(this));
    socket.on('uid', this.onAddChannel.bind(this));
  }

  onConnect(){
    this.setState({ connected : true})
  }
  onDisconnect() {
    this.setState({ connected : false})
  }

  onAddChannel(e){
    console.log("e ", e)
  }
  


  render(){
    return (

        <Page>
          <Navbar title="Чаты" backLink="Back"></Navbar>
          <Subnavbar inner={false}>
            <Searchbar
              searchContainer=".virtual-list"
              searchItem="li"
              searchIn=".item-title"
            ></Searchbar>
          </Subnavbar>

          { this.state.loader ?
          <List mediaList>
          {this.state.friends.map(item =>
              (
                <ListItem
                  onClick={this.getDialog.bind(this, item.id)}
                  key={item.id}
                  title={item.name + ' ' + item.lastname}
                  after={item.last_activity.slice(14)}
                  subtitle="Last messages not found."
                  link={'/dialog/' + item.id}
                >
                  <img slot="media" alt={"image-" + item.key} src={'http://otau.org' + item.photo} width="44" />
                </ListItem>
              )
          )}
          </List>
          :
          <Block className="text-align-center">
            <Preloader color="multi"></Preloader>
          </Block>
          }
          </Page>
    )
  }
}

export default Friends;
