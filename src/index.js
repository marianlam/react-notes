import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import UtilityBar from './components/utility_bar';
import CreateNoteModal from './components/create_note_modal';
import Note from './components/note';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <UtilityBar />
        <CreateNoteModal />
        <Note />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
