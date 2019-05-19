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
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    this.setState({
    });
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
          currEditNoteTitle={this.state.currEditNoteTitle}
          currEditNoteText={this.state.currEditNoteText}
          isEditModeOn={this.state.isEditModeOn}
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
        />
        <Note toggleEditMode={this.toggleEditMode} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
