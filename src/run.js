//noinspection ThisExpressionReferencesGlobalObjectJS
(function (global) {
    'use strict';

    require({
        csv: {
            delimiter: ';'
        },

        paths: {
            'd3-meetup': './d3-meetup',
            d3: '../node_modules/d3/d3',
            lodash: '../node_modules/lodash/lodash',
            text: './contrib/text/text'
        },

        shim: {
            d3: {
                exports: 'd3'
            }
        }
    }, ['d3-meetup/main']);

})(this);
