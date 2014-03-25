define(['fixitup'], function (fixitup) {

    'use strict';

    var errMsg = 'you have given all your money to the fix it up chappie';

    function Sneech(starOnThars) {
        this.star = starOnThars;
    }

    Sneech.prototype.money = 100;

    Sneech.prototype.star = false;

    Sneech.prototype.starOn = function () {
        if (this.money >= MONEY.on) {
            this.money -= MONEY.on;
            fixitup.on(this, MONEY.on);
        } else {
            throw errMsg;
        }
    };

    Sneech.prototype.starOff = function () {
        if (this.money >= MONEY.off) {
            this.money -= MONEY.off;
            fixitup.off(this, MONEY.off);
        } else {
            throw errMsg;
        }
    };

    return Sneech;

});