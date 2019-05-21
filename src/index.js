import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import UtilityBar from './components/utility_bar';
import CreateNoteModal from './components/create_note_modal';
import EditNoteModal from './components/edit_note_modal';
import Note from './components/note';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateModeOn: false,
      isEditModeOn: false,
      currNoteTitle: '',
      currNoteContent: '',
    };
    this.toggleCreateMode = this.toggleCreateMode.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getNoteTitle(noteTitle) {
    this.setState({
      currNoteTitle: noteTitle,
    });
  }

  getNoteContent(noteContent) {
    this.setState({
      currNoteContent: noteContent,
    });
  }

  toggleEditMode() {
    this.setState(prevState => ({
      isEditModeOn: !prevState.isEditModeOn,
    }));
  }

  toggleCreateMode() {
    this.setState(prevState => ({
      isCreateModeOn: !prevState.isCreateModeOn,
    }));
  }

  closeModal() {
    this.setState(prevState => ({
      isCreateModeOn: false,
      isEditModeOn: false,
    }));
  }

  render() {
    return (
      <div>
        <UtilityBar toggleCreateMode={this.toggleCreateMode} />
        <CreateNoteModal
          isCreateModeOn={this.state.isCreateModeOn}
          closeModal={this.closeModal}
        />
        <Note
          getNoteTitle={noteTitle => this.getNoteTitle(noteTitle)}
          getNoteContent={noteContent => this.getNoteContent(noteContent)}
          toggleEditMode={this.toggleEditMode}
        />
        <EditNoteModal
          currNoteTitle={this.state.currNoteTitle}
          currNoteContent={this.state.currNoteContent}
          isEditModeOn={this.state.isEditModeOn}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
