const fs = require('fs');
const _=require('lodash');
const os = require('os');
const notes= require('./notes.js');
const yargs = require('yargs');

//get inpputs from user using yards
const tittleOption={
  describe:'Tittle of the note',
  demand:true,
  alias:'t' //--tittle wenuwata -t=secret kiyala denna puluwan
};

const bodyOption={describe:'Body of the note',
demand:true,
alias:'b'
};

const argv=yargs
.command('add','To Add a new note',{
     tittle:tittleOption,
     body:bodyOption
})
.command('remove','To remove a note',{
      tittle:tittleOption
})
.command('get', 'Get existing note',{
  tittle:tittleOption
})
.command('list', 'Get all the notes ')
.help()
.argv;
var command=process.argv[2];
console.log('Command',command);

//adding notes
if (command=='add') {
  console.log('add note');
  var note = notes.addNotes(argv.tittle,argv.body);
  if (note) {
    console.log("Note successfully created");
    notes.noteInfo(note);
  }else {
      console.log("Same file exists");
  }
//remove nodes from the list
} else if (command=='remove') {
  console.log('remove node');
  var noteRemoved=notes.removeNote(argv.tittle);
  var message=noteRemoved ? 'Note was removes' :'There is no any note that matches';
  console.log(message);
//  if (noteRemoved) {
//    console.log("Note is removed");
//  } else {
//    console.log("There is no any note like that");
//  }
//get a node from the list according to the lsit
}else if (command=='get') {
  console.log("get note");
  var filterednote=notes.getNote(argv.tittle);
  if (filterednote) {
     notes.noteInfo(filterednote);
  } else {
    console.log("Nothing found");
  }
}
else if (command=='list') {
    var allNotes=notes.getAll();
    allNotes.forEach(function(note){
       notes.noteInfo(note);
       console.log();
    });
}
else {
  console.log('command not found');
}


//fs.appendFile('greeting.txt','Hello '+user.username +'your age is ' +notes.age);
