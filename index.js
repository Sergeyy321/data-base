
import * as contacts from './contacts.js'

import yargs from 'yargs'


 const invokeAction = async ({ action, id, name, email, phone })=> {
   switch (action) {
    case "list":
       const getContacts = await contacts.listContacts()
       return console.log(getContacts);
       break;

    case "get":
       const getContact = await contacts.getContactById(id);
       return console.log(getContact);
       break;

    case "add":
   const newContact = await contacts.addContact( name, email,phone );
   return console.log(newContact);
      break;

    case "remove":
       const deleteContact = await contacts.removeContact(id);
       return console.log(deleteContact);
      break;

     default:
       console.warn("\x1B[31m Unknown action type!");
   }
 }
const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);



