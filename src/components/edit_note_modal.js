import React, { Component } from 'react';
import ColorPaletteBlock from './color_palette_block';

class EditNoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    // editedTitle: this.props.currNoteTitle,
    // editedContent: this.props.currNoteContent,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // resetForm() {
  //   this.setState({
  //     editedTitle: this.props.currNoteTitle,
  //     editedContent: this.props.currNoteContent,
  //   });
  // }

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
    if (this.props.isEditModeOn && !this.props.isCreateModeOn) {
      return (
        <div id="modal-container">
          <div id="create-note-modal">
            <h2 id="modal-title">edit a note</h2>
            {/* <button id="button-cancel" type="button" onClick={() => { this.props.closeModal(); this.resetForm(); }}>cancel</button> */}
            <button id="button-cancel" type="button" onClick={this.props.closeModal}>cancel</button>
            <div>
              <div id="color-palette">
                <ul>
                  {paletteItems}
                </ul>
              </div>
              <div id="input-fields">
                <input defaultValue={this.props.currNoteTitle} placeholder="Note title" id="note-title" type="text" maxLength="80" />
                <textarea defaultValue={this.props.currNoteContent} placeholder="Note content" id="note-content" type="text" />
                <button type="submit">change</button>
                {/* <div>{JSON.stringify(this.state)}</div> */}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default EditNoteModal;
