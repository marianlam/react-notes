import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      // x: 0,
      // y: 0,
      // zIndex: 0
    };
  }

  render() {
    return (
      <div className="note">
        <h3>{this.state.title}</h3>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Note;
