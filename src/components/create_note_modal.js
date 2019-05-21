import React, { Component } from 'react';
import ColorPaletteBlock from './color_palette_block';

class CreateNoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: '',
      newContent: '',
      // editedTitle: '',
      // editedContent: '',
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
      // editedTitle: this.props.currNoteTitle,
      // editedContent: this.props.currNoteContent,
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
    if (this.props.isModalOpen || this.props.isEditModeOn) {
      modalStyle = {
        display: 'block',
      };
    } else {
      modalStyle = {
        display: 'none',
      };
    }
    // if (this.props.isEditModeOn) {
    //   return (
    //     <div id="modal-container">
    //       <div id="create-note-modal" style={modalStyle}>
    //         <h2 id="modal-title">edit a note</h2>
    //         <button id="button-cancel" type="button" onClick={() => { this.props.closeModal(); this.resetForm(); }}>cancel</button>
    //         <div>
    //           <div id="color-palette">
    //             <ul>
    //               {paletteItems}
    //             </ul>
    //           </div>
    //           <div id="input-fields">
    //             <input value={this.state.editedTitle} name="editedTitle" placeholder="Note title" id="note-title" type="text" maxLength="80" onChange={this.handleChange} />
    //             {/* <input defaultValue={this.props.currNoteTitle} placeholder="Note title" id="note-title" type="text" maxLength="80" /> */}
    //             <textarea value={this.state.editedContent} name="editedContent" placeholder="Note content" id="note-content" type="text" onChange={this.handleChange} />
    //             {/* <textarea defaultValue={this.props.currNoteContent} placeholder="Note content" id="note-content" type="text" /> */}
    //             <button type="submit">change</button>
    //             {/* <div>{JSON.stringify(this.state)}</div> */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // } else {
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
// }
}

export default CreateNoteModal;
