import React from 'react';
import {
  App,
  Panel,
  View,
  Statusbar
} from 'framework7-react';

import routes from '../routes';

export default function (props) {

  // Framework7 parameters here
  const f7params = {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Chat App', // App name
    theme: 'auto', // Automatic theme detection
    state: {
      friends: null,
      user: null,
      ws: new WebSocket('wss://echo.websocket.org')
    },
    // App routes
    routes,
  };

  return (
    <App params={f7params} >
      <Statusbar />

      {/* Right Panel */}
      <Panel right reveal themeDark>
        <View url="/panel-right/"/>
      </Panel>

      {/* Main View */}
      <View defaultState={f7params.state} id="main-view" url="/" main className="ios-edges"/>

    </App>
  );
};
