import React, { Component } from 'react';
import ColorPaletteBlock from './color_palette_block';

class CreateNoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const colors = ['FFFFFF', 'FFF9C1', 'FDFF8E', 'FFE1BD', 'D9D9D9', '9A92FF', 'F2D6FF', 'FFE6E6', 'E4FFC9', '9CFFD5', '83F8FF', 'B0F1FF'];
    const paletteItems = colors.map((color) => {
      return (
        <li key={color}>
          <ColorPaletteBlock color={color} />
        </li>
      );
    });
    let modalStyle;
    if (this.props.isModalOpen) {
      modalStyle = {
        visibility: 'visible',
      };
    } else {
      modalStyle = {
        visibility: 'hidden',
      };
    }
    return (
      <div id="modal-container">
        <div id="create-note-modal" style={modalStyle}>
          <h2 id="modal-title">create a note</h2>
          <button id="button-cancel" type="button" onClick={this.props.closeModal}>cancel</button>
          <div>
            <div id="color-palette">
              <ul>
                {paletteItems}
              </ul>
            </div>
            <div id="input-fields">
              <input placeholder="Note title" id="note-title" type="text" maxLength="50" />
              <textarea placeholder="Note content" id="note-content" />
              <button type="submit">create</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNoteModal;
