import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import UtilityBar from './components/utility_bar';
import CreateNoteModal from './components/create_note_modal';
import Note from './components/note';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isEditModeOn: false,
      currNoteTitle: '',
      currNoteContent: '',
    };
    // this.getNoteTitle = this.getNoteInfo.bind(this, this.currNoteTitle);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getNoteTitle(noteTitle) {
    this.setState({
      currNoteTitle: noteTitle,
    });
    // console.log(this.state.currNoteTitle);
  }

  getNoteContent(noteContent) {
    this.setState({
      currNoteContent: noteContent,
    });
    // console.log(this.state.currNoteContent);
  }

  toggleModal() {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  }

  toggleEditMode() {
    this.setState(prevState => ({
      isEditModeOn: !prevState.isEditModeOn,
    }));
  }

  closeModal() {
    this.setState(prevState => ({
      isModalOpen: false,
      isEditModeOn: false,
    }));
  }

  render() {
    return (
      <div>
        <UtilityBar toggleModal={this.toggleModal} />
        <CreateNoteModal
          currNoteTitle={this.state.currNoteTitle}
          currNoteContent={this.state.currNoteContent}
          isEditModeOn={this.state.isEditModeOn}
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
        />
        <Note
          getNoteTitle={noteTitle => this.getNoteTitle(noteTitle)}
          getNoteContent={noteContent => this.getNoteContent(noteContent)}
          toggleEditMode={this.toggleEditMode}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
