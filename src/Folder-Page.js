import React from 'react';
import NoteThumbnail from './note-thumbnail';

function FolderPage(props) {
  const notes = props.notes.map(note => {
    return (
      <NoteThumbnail
        key={note.id}
        noteId={note.id}
        modified={note.modified}
        name={note.name}
      />
    );
  });

  return <div>{notes}</div>;
}

export default FolderPage;