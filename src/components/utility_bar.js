import React, { Component } from 'react';

class UtilityBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const utilityBarStyle = {
      backgroundColor: 'white',
      boxShadow: '0 2px 2px gray',
      display: 'flex',
      padding: '0 16px',
      position: 'fixed',
      zIndex: '1000',
      width: '100%',
    };

    const headerStyle = {
      fontWeight: 'lighter',
      margin: '0 18px 0 0',
      padding: '8px 0 12px 0',
      textTransform: 'lowercase',
    };

    const buttonContainerStyle = {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      top: '4px',
      right: '40px',
    };

    const buttonStyle = {
      backgroundColor: 'white',
      border: '1px solid gray',
      borderRadius: '2px',
      cursor: 'pointer',
      margin: '8px',
      padding: '8px',
      textTransform: 'lowercase',
    };

    return (
      <div style={utilityBarStyle}>
        <h1 style={headerStyle}>Note Board</h1>
        <div style={buttonContainerStyle}>
          <button onClick={this.props.toggleCreateMode} style={buttonStyle} className="button-utility" type="button">Create Note</button>
          <button style={buttonStyle} className="button-utility" type="button">Delete All</button>
          <button style={buttonStyle} className="button-utility" type="button">Organize Notes</button>
        </div>
      </div>
    );
  }
}

export default UtilityBar;
