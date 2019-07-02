import React from 'react';

function NotePage(props) {
  const noteId = props.match.params.noteId;
  const note = props.notes.find(note => note.id === noteId);
  console.log('history', props.history);
  return (
  <div>
    <header>
      <h2>
        {note.name}
      </h2>
      <p>
        {new Date(note.modified).toLocaleDateString()}
      </p>
      <button>Delete Note</button>
    </header>
    <p>
      {note.content}
    </p>
  </div>);
}

export default NotePage;