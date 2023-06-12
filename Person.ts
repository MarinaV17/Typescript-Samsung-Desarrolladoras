import { Direction } from "./Direction";
 import { Phone } from "./Phone";
import { Mail } from "./Mail";

export class Person {
    private _name: string;
    private _surnames: string;
    private _age: number;
    private _dni: string;
    private _birthday: Date;
    private _favColor: string;
    private _sex: string;
    private _directions: Direction[];
    private _mails: Mail[];
    private _phones: Phone[];
    private _notes: string;

    constructor(
        name: string, 
        surnames: string, 
        age: number, 
        dni: string, 
        birthday: Date, 
        favColor: string, 
        sex: string, 
        directions: Direction[], 
        mails: Mail[], 
        phones: Phone[],
        notes: string
    ){
        this._name = name;
        this._surnames = surnames;
        this._age = age;
        this._dni = dni;
        this._birthday = birthday;
        this._favColor = favColor;
        this._sex = sex;
        this._directions = directions;
        this._mails = mails;
        this._phones = phones;
        this._notes = notes;
    }

    get name(): string{
        return this._name;
    }
    set name(name: string){
        this._name = name;
    }

    get surnames(): string{
        return this._surnames;
    }
    set surnames(surnames: string){
        this._surnames = surnames;
    }

    get age(): number{
        return this._age;
    }
    set age(age: number){
        this._age = age;
    }

    get dni(): string{
        return this._dni;
    }
    set dni(dni: string){
        this._dni = dni;
    }

    get birthday(): Date{
        return this._birthday;
    }
    set birthday(birthday: Date){
        this._birthday = birthday;
    }

    get favColor(): string{
        return this._favColor;
    }
    set favColor(favColor: string){
        this._favColor = favColor;
    }

    get sex(): string{
        return this._sex;
    }
    set sex(sex: string){
        this._sex = sex;
    }

    get directions(): Direction[]{
        return this._directions;
    }
    set directions(directions: Direction[]){
        this._directions = directions;
    }

    get mails(): Mail[]{
        return this._mails;
    }
    set mails(mails: Mail[]){
        this._mails = mails;
    }

    get phones(): Phone[]{
        return this._phones;
    }
    set phones(phones: Phone[]){
        this._phones = phones;
    }

    get notes(): string{
        return this._notes;
    }
    set notes(notes: string){
        this._notes = notes;
    }
    
    changeMail(mail: Mail){
        let found: Mail | undefined = this._mails.find(actualMail => actualMail.type === mail.type);
        if (found != undefined)      
            (found as Mail).direction = mail.direction;
        else
            this._mails.push(mail);
    }
}
