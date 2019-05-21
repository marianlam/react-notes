import React, { Component } from 'react';
import Draggable from 'react-draggable';
import marked from 'marked';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello, stranger LET\'S SEE HOW FAR THIS CAN GO',
      content: '![](http://i.giphy.com/gyRWkLSQVqlPi.gif)',
      x: 50,
      y: 50,
      zIndex: 999,
    };
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDrag(e, data) {
    console.log(data);
    this.setState({
      x: data.x,
      y: data.y,
    });
  }

  render() {
    const noteStyle = {
      display: 'inline-block',
      backgroundColor: '#FFF9C1',
      boxShadow: '2px 2px 2px gray',
      minWidth: '250px',
      minHeight: '250px',
      width: 'auto',
      height: 'auto',
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
      right: '8px',
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
      maxWidth: '250px',
    };

    const noteContentStyle = {
      fontSize: '12px',
      padding: '0 14px 12px 14px',
      margin: '-12px 0 0 0',
    };

    return (
      <Draggable
        handle=".note"
        grid={[25, 25]}
        // defaultPosition={{ x: 20, y: 20 }}
        position={{
          x: this.state.x,
          y: this.state.y,
          width: '250px',
          height: '250px',
        }}
        // onStart={this.handleStartDrag}
        onDrag={this.handleDrag}
        // onStop={this.handleStopDrag}
      >
        <div className="note"
          style={noteStyle}
          role="textbox"
          tabIndex="-1"
          onClick={() => { this.props.getNoteTitle(this.state.title); this.props.getNoteContent(this.state.content); }}
        >
          <div style={buttonContainerStyle}>
            <button style={buttonStyle} type="button" className="button-note-delete" onClick={this.props.handleDeleteClick}>
              <i className="fas fa-minus"> </i>
            </button>
            <button style={buttonStyle} type="button" className="button-note-edit" onClick={this.props.toggleEditMode}>
              <i className="far fa-edit"> </i>
            </button>
          </div>
          <h3 style={noteTitleStyle}>{this.state.title}</h3>
          <p style={noteContentStyle} dangerouslySetInnerHTML={{ __html: marked(this.state.content || '') }} />
        </div>
      </Draggable>
    );
  }
}

export default Note;
