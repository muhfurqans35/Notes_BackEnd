const routes = (handler) => [
  // postNoteHandler hanya menerima dan menyimpan "satu" note.
  {
    method: "POST",
    path: "/notes",
    handler: handler.postNoteHandler,
  },
  // getNotesHandler mengembalikan "banyak" note.
  {
    method: "GET",
    path: "/notes",
    handler: handler.getNotesHandler,
  },
  // getNoteByIdHandler mengembalikan "satu" note.
  {
    method: "GET",
    path: "/notes/{id}",
    handler: handler.getNoteByIdHandler,
  },
  // putNoteByIdHandler hanya menerima dan mengubah "satu" note.
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: handler.putNoteByIdHandler,
  },
  // putNoteByIdHandler hanya menerima dan mengubah "satu" note.
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: handler.deleteNoteByIdHandler,
  },
];

module.exports = routes;
