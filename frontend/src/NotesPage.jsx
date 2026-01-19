import React, { useState, useEffect } from "react";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/notes/all")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setNotes(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <>
      {notes.length === 0 ? (
        <p className="text-gray-500 p-5">No notes found</p>
      ) : (
        notes.map((note) => (
          <Card key={note._id} title={note.title} content={note.content} />
        ))
      )}
    </>
  );
};

export default NotesPage;
