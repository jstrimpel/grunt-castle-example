define(['on', 'off'], function (on, off) {

    'use strict';

    return {

        money: 0,

        opportunist: true,

        on: function (sneetch, money) {
            this.money += money;
            return on(sneetch);
        },

        off: function (sneetch, money) {
            this.money += money;
            return off(sneetch);
        }

    };

});
