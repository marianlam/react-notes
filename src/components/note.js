import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello, stranger LET\'S SEE HOW FAR THIS CAN GO',
      text: 'Here is some text. I know you can read. SO READ IT!',
      x: 50,
      y: 100,
      zIndex: 999,
    };
  }

  render() {
    const noteStyle = {
      display: 'inline-block',
      backgroundColor: '#FFF9C1',
      boxShadow: '2px 2px 2px gray',
      width: '250px',
      height: '250px',
      position: 'absolute',
      top: this.state.y,
      left: this.state.x,
      zIndex: this.state.zIndex,
    };

    const buttonContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '0',
      right: '-4px',
    };

    const buttonStyle = {
      background: 'none',
      border: 'none',
      fontSize: '10px',
      outline: 'none',
    };

    const noteTitleStyle = {
      fontSize: '16px',
      fontWeight: 'bold',
      padding: '14px',
      margin: '0',
    };

    const noteContentStyle = {
      fontSize: '12px',
      padding: '0 14px 12px 14px',
      margin: '-8px 0 0 0',
    };

    return (
      <div className="note" style={noteStyle}>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} type="button" className="button-note-delete">
            <i className="fas fa-minus"> </i>
          </button>
          <button style={buttonStyle} type="button" className="button-note-edit" onClick={this.props.toggleEditMode}>
            <i className="far fa-edit"> </i>
          </button>
        </div>
        <h3 style={noteTitleStyle}>{this.state.title}</h3>
        <p style={noteContentStyle}>{this.state.text}</p>
      </div>
    );
  }
}

export default Note;
