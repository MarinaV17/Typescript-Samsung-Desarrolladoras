import { Person } from "./Person";
import { Direction } from "./Direction";
import { Phone } from "./Phone";
import { Mail } from "./Mail";
import { PhoneTypes } from "./PhoneTypes";
import { MailTypes } from "./MailTypes";


//PERSON Nº1:
const mailPerson1 = new Mail (MailTypes.WORK.toString(), "johndoe@mycompany.com");
const personDirection1 = new Direction ("Alcalá", 1, 1, "A", 28001, "Madrid", "Madrid");
const personPhone1 = new Phone (PhoneTypes.WORK.toString(), 660046005);
const person1 = new Person ("John", "Doe", 35, "27720253D", new Date (1988, 1, 30), "red", "man", [personDirection1], [mailPerson1], [personPhone1], "Work friend");

//PERSONA Nº2:
const directionPerson2 = new Direction ("Mercé Rodoreda", 18, 1, "B", 28850, "Torrejón de Ardoz", "Madrid");
const phonePerson2 = new Phone (PhoneTypes.PERSONAL.toString(), 934705987);
const mailPerson2 = new Mail (MailTypes.PERSONAL.toString(), "braddpitt@gmail.com");
const person2 = new Person ("Brad", "Pitt", 40, "79586137L", new Date (1983, 4, 13), "black", "man", [directionPerson2], [mailPerson2], [phonePerson2], "Old friend");

//PERSON Nº3:
const directionPerson3 = new Direction ("Domingo Gaspar Pérez", 10, 1, "A", 28300, "Aranjuez", "Madrid");
const phonePerson3 = new Phone(PhoneTypes.HOME.toString(), 789658365);
const mailPerson3 = new Mail (MailTypes.WORK.toString(), "chloeobrian@hotmail.com");
const person3 = new Person ("Chloe", "O'Brian", 50, "51823699F", new Date(1973, 5, 20), "blue", "woman", [directionPerson3], [mailPerson3], [phonePerson3], "Sister in law");

const myContacts: Person [] = [person1, person2, person3];

console.log("My contacts:");
myContacts.forEach(contact => console.log(contact))




const dniToUpdate: string = "79586137L";

const personToUpdate: Person = myContacts.find(persona => persona.dni === dniToUpdate) as Person;

const newDirection = new Direction ("Suecia", 58, 1, "A", 28022, "Madrid", "Madrid")
const newPhone = new Phone (PhoneTypes.WORK.toString(), 606545989)
const newMail = new Mail (MailTypes.PERSONAL.toString(), "iambradpitt@gmail.com")

//editarDatosContacto.cambioDirection([direccionCambiada]);
//editarDatosContacto.cambioPhone([telefonoCambiado]);
personToUpdate.directions = [newDirection];
personToUpdate.phones = [newPhone];
personToUpdate.mails = [newMail];
personToUpdate.name = "Bradley";

myContacts.map(contact => {
    if(contact.dni == dniToUpdate){
        contact = personToUpdate
    }
});

console.log("Updated contacts:");
myContacts.forEach(contact => console.log(contact))
