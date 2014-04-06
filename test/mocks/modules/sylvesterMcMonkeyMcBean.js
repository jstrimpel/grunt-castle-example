// you could choose to stub out the dependencies, e.g.,
// define(['on', 'off'], function (on, off) {
// or omit them all together:
define(function () {

    'use strict';

    // stub out functions for mock; just
    return {

        on: function (sneetch, money) {
            sneetch.star = true;
            return sneetch;
        },

        off: function (sneetch, money) {
            sneetch.star = false;
            return sneetch;
        }

    };

});
