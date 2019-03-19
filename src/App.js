import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';


import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';

class App extends Component {
  state = {
    SideDrawerOpen: false
  }; 

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}; 
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }


    return (
      <div style={{height: '100%' }}>
        <Toolbar drawerClickHandler = {this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <p>This is page contain</p>
        </main>

      </div>
    );
  }
}

export default App;
