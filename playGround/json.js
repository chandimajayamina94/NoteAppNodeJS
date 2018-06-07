//define an object and convert it into a string
/*
var obj={
  name:'silent'     //obj waladi obj.name kiyala access karanna puluwan
};
var stringobj=JSON.stringify(obj);
console.log(typeof stringobj);   //string
console.log(stringobj);          //{"name":"silent"}
*/

//converting back string to object array or original type
/*
var personString='{"name":"silent","Age":25}';
var person=JSON.parse(personString);
console.log(typeof person);
console.log(person);
*/

//how to add notes and read notes

const fs = require('fs');
//when some one add node we use this
var originalNote={
  tittle:'Some tittle',
  body :'Some body'
};
var originalNoteString=JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);
//when some one read we use this to read
var noteString=fs.readFileSync('notes.json');
var note=JSON.parse(originalNoteString);
console.log(typeof note);
console.log(note.tittle);
*/
