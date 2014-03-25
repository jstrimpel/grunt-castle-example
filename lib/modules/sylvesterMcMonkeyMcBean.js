define(['on', 'off'], function (on, off) {

    'use strict';

    return {

        money: 0,

        opportunist: true,

        on: function (sneech, money) {
            this.money += money;
            return on(sneech);
        },

        off: function (sneech, money) {
            this.money += money;
            return off(sneech);
        }

    };

});