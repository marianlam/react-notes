import React, { Component } from 'react';
import ColorPaletteBlock from './color_palette_block';

class CreateNoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: '',
      newContent: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  resetForm() {
    this.setState({
      newTitle: '',
      newContent: '',
    });
  }

  render() {
    const colors = ['FFFFFF', 'FFF9C1', 'FDFF8E', 'FFE1BD',
      'D9D9D9', '9A92FF', 'F2D6FF', 'FFE6E6',
      'E4FFC9', '9CFFD5', '83F8FF', 'B0F1FF'];
    const paletteItems = colors.map((color) => {
      return (
        <li key={color}>
          <ColorPaletteBlock color={color} />
        </li>
      );
    });
    let modalStyle;
    if (this.props.isCreateModalOpen && !this.props.isEditModalOpen) {
      modalStyle = {
        display: 'block',
      };
    } else {
      modalStyle = {
        display: 'none',
      };
    }
    return (
      <div id="modal-container">
        <div id="create-note-modal" style={modalStyle}>
          <h2 id="modal-title">create a note</h2>
          <button id="button-cancel" type="button" onClick={() => { this.props.closeModal(); this.resetForm(); }}>cancel</button>
          <div>
            <div id="color-palette">
              <ul>
                {paletteItems}
              </ul>
            </div>
            <div id="input-fields">
              <input value={this.state.newTitle} name="newTitle" placeholder="Note title" id="note-title" type="text" maxLength="50" onChange={this.handleChange} />
              <textarea value={this.state.newContent} name="newContent" placeholder="Note content" id="note-content" onChange={this.handleChange} />
              <button type="submit">create</button>
              {/* <div>{JSON.stringify(this.state)}</div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNoteModal;
