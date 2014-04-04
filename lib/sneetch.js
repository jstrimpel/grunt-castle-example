define(['fixitup'], function (fixitup) {

    'use strict';

    var errMsg = 'you have given all your money to the fix it up chappie';

    function Sneetch(starOnThars) {
        this.star = starOnThars;
    }

    Sneetch.prototype.money = 100;

    Sneetch.prototype.star = false;

    Sneetch.prototype.starOn = function () {
        if (this.money >= MONEY.on) {
            this.money -= MONEY.on;
            fixitup.on(this, MONEY.on);
        } else {
            throw errMsg;
        }
    };

    Sneetch.prototype.starOff = function () {
        if (this.money >= MONEY.off) {
            this.money -= MONEY.off;
            fixitup.off(this, MONEY.off);
        } else {
            throw errMsg;
        }
    };

    return Sneetch;

});