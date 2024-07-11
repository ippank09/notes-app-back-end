const { method } = require("lodash");
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByHandler, deleteNoteByIdhandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path:'/notes',
        handler:addNoteHandler,
    },
    {
        method:'GET',
        path:'/notes',
        handler: getAllNotesHandler,
    },

       {method: 'GET',
       path: '/notes/{id}',
       handler: getNoteByIdHandler,
       },

       {
        method:'PUT',
        path:'/notes/{id}',
        handler: editNoteByHandler,
       },

       {
        method:'DELETE',
        path:'/notes/{id}',
        handler: deleteNoteByIdhandler,
       }

];

module.exports = routes;