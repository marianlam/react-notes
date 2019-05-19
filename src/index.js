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
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  }

  render() {
    return (
      <div>
        <UtilityBar toggleModal={this.toggleModal} />
        <CreateNoteModal isModalOpen={this.state.isModalOpen} closeModal={this.toggleModal} />
        <Note />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
