"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = void 0;
class Direction {
    constructor(street, number, floor, letter, zipCode, population, province) {
        this._street = street;
        this._number = number;
        this._floor = floor;
        this._letter = letter;
        this._zipCode = zipCode;
        this._population = population;
        this._province = province;
    }
    get street() {
        return this._street;
    }
    set street(street) {
        this._street = street;
    }
    get number() {
        return this._number;
    }
    set number(number) {
        this._number = number;
    }
    get floor() {
        return this._floor;
    }
    set floor(floor) {
        this._floor = floor;
    }
    get letter() {
        return this._letter;
    }
    set letter(letter) {
        this._letter = letter;
    }
    get zipCode() {
        return this._zipCode;
    }
    set zipCode(zipCode) {
        this._zipCode = zipCode;
    }
    get population() {
        return this._population;
    }
    set population(population) {
        this._population = population;
    }
    get province() {
        return this._province;
    }
    set province(province) {
        this._province = province;
    }
}
exports.Direction = Direction;
