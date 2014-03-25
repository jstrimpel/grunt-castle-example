// you could choose to stub out the dependencies, e.g.,
// define(['on', 'off'], function (on, off) {
// or omit them all together:
define(function () {

    'use strict';

    // stub out functions for mock; just
    return {

        on: function (sneech, money) {
            sneech.star = true;
            return sneech;
        },

        off: function (sneech, money) {
            sneech.star = false;
            return sneech;
        }

    };

});