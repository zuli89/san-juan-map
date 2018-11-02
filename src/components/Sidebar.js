import React, { Component } from 'react'

export class Sidebar extends Component {
  render() {
    return (
      <div id = 'sidebar'>
        <span id='sidebar-title'>Points of Interest</span>
        <p><input type="text" placeholder="Search.." id="search-bar"></input></p> 
        
      </div>
    )
  }
}

export default Sidebar;
