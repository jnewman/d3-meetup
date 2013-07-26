define(['./Csv'], function (Csv) {
    'use strict';
    return {
        load: function (name, req, done, config) {
            var delimiter = config.csv.delimiter;

            req(['text!' + name], function (value) {
                done(new Csv(delimiter, value));
            });
        }
    };
});
