import React, { Component } from 'react';
import ColorPaletteBlock from './color_palette_block';

class CreateNoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const colors = ['FFFFFF', 'FFF9C1', 'FDFF8E', 'FFE1BD', 'D9D9D9', '9A92FF', 'F2D6FF', 'FFE6E6', 'E4FFC9', '9CFFD5', '83F8FF', 'B0F1FF'];
    const paletteItems = colors.map((color) => {
      return (
        <li>
          <ColorPaletteBlock color={color} key={color} />
        </li>
      );
    });
    return (
      <div>
        <h2>Cancel</h2>
        <h2>Create Note</h2>
        <div id="color-palette">
          <ul>
            {paletteItems}
          </ul>
        </div>
        <div>
          <input id="note-title" type="text" maxLength="50" />
          <textArea id="note-content" />
          <button type="submit">Create</button>
        </div>
      </div>
    );
  }
}

export default CreateNoteModal;
