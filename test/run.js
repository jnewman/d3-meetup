//noinspection ThisExpressionReferencesGlobalObjectJS
(function (global) {
    'use strict';

    var TESTS = [
        'd3-meetup/main.js'
    ];

    require({
        paths: {
            chai: '../node_modules/chai/chai',
            d3: '../node_modules/d3/d3',
            lodash: '../node_modules/lodash/lodash',
            mocha: '../node_modules/mocha/mocha',
            test: '.'
        },

        shim: {
            d3: {
                exports: 'd3'
            },
            mocha: {
                exports: 'mocha'
            }
        }
    });

    require(['require', 'lodash', 'mocha'], function (require, _, mocha) {
        _.noConflict();

        mocha.ui('bdd');
        mocha.reporter('html');

        //noinspection JSUnresolvedVariable
        var runner = typeof window !== 'undefined' && global.mochaPhantomJS ?
            global.mochaPhantomJS : mocha;

        require(TESTS, _.bind(runner.run, runner));
    });
})(this);
