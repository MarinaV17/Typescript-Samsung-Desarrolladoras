"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(type, direction) {
        this._type = type;
        this._direction = direction;
    }
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
    get direction() {
        return this._direction;
    }
    set direction(direction) {
        this._direction = direction;
    }
}
exports.Mail = Mail;
