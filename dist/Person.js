"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, surnames, age, dni, birthday, favColor, sex, directions, mails, phones, notes) {
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
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get surnames() {
        return this._surnames;
    }
    set surnames(surnames) {
        this._surnames = surnames;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get dni() {
        return this._dni;
    }
    set dni(dni) {
        this._dni = dni;
    }
    get birthday() {
        return this._birthday;
    }
    set birthday(birthday) {
        this._birthday = birthday;
    }
    get favColor() {
        return this._favColor;
    }
    set favColor(favColor) {
        this._favColor = favColor;
    }
    get sex() {
        return this._sex;
    }
    set sex(sex) {
        this._sex = sex;
    }
    get directions() {
        return this._directions;
    }
    set directions(directions) {
        this._directions = directions;
    }
    get mails() {
        return this._mails;
    }
    set mails(mails) {
        this._mails = mails;
    }
    get phones() {
        return this._phones;
    }
    set phones(phones) {
        this._phones = phones;
    }
    get notes() {
        return this._notes;
    }
    set notes(notes) {
        this._notes = notes;
    }
    changeMail(mail) {
        let found = this._mails.find(actualMail => actualMail.type === mail.type);
        if (found != undefined)
            found.direction = mail.direction;
        else
            this._mails.push(mail);
    }
}
exports.Person = Person;
