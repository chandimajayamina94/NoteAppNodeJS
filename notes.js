console.log('Starting notes.js');
const fs = require('fs');

//printing note info
var noteInfo=function(note){
  console.log('Tittle',note.tittle);
  console.log('Body',note.body);
};


//we get the previous notes from notes-data.json and put it into an array
var fetchNotes=function(){
  try {
    //take the file notesdata.json and put it to an array of objects
    var noteString=fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    //if there is no any data
    return [];
  }
};
//write the notes on the file
var saveNotes=function(notes){
   fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNotes=function(tittle,body){
     var notes=fetchNotes();
     var note={
       tittle,
       body
     };
     //tittle aka samana awa awoth a note aka add karanne na
     var duplicateNotes=notes.filter(function(note){
       return note.tittle===tittle;
     });
     //tittle aka asamana nm witarak add karanawa
     if (duplicateNotes.length===0) {
       notes.push(note);
       saveNotes(notes);
       return note;
     }
};

var removeNote=function(tittle){
     //get the notes
     var notes=fetchNotes();
     //api methana karanne tittle aka tiyana note aka ara an ith awa notes widihata apahu yawanawa
     var filteredNotes=notes.filter(function(note){
       return note.tittle!==tittle;
     });
     //save new notes
     saveNotes(filteredNotes);
     return notes.length!==filteredNotes.length;

};

var getNote=function(tittle){
     var notes=fetchNotes();
     var filteredNotes=notes.filter(function(note){
       return note.tittle===tittle;
     });
     return filteredNotes[0];
};

var getAll=function(){
  return fetchNotes();
};



module.exports={
   noteInfo,
   addNotes,
   removeNote,
   getNote,
   getAll
};
