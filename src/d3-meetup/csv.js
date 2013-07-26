define(['lodash'], function (_) {
    'use strict';

    return {
        load: function (name, req, done, config) {
            var delimiter = config.csv.delimiter;

            req(['text!' + name], function (value) {
                var rows = value.split('\n');
                var headers = rows.splice(0, 1)[0].split(delimiter);

                done({
                    get: function (start, end) {
                        if (!start) {
                            start = 0;
                        }

                        if (!end) {
                            end = -1;
                        }

                        return _.map(rows.slice(start, end), function (row) {
                            var rowObject = {};
                            var cells = row.split(delimiter);

                            _.forEach(headers, function (header, i) {
                                rowObject[header] = cells[i];
                            });

                            return rowObject;
                        });
                    },

                    length: rows.length
                });
            });
        }
    };
});
