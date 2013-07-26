define(['lodash'], function (_) {
    'use strict';

    function Csv(delimiter, raw) {
        var rows = this._rows = raw.split('\n');
        this._headers = rows.splice(0, 1)[0].split(delimiter);
        this._delimiter = delimiter;
        this.length = rows.length;
    }

    _.extend(Csv.prototype, {
        length: 0,

        slice: function (start, end) {
            return _.map(this._rows.slice(start || 0, end || this.length), function (row) {
                var rowObject = {};
                var cells = row.split(this._delimiter);

                _.forEach(this._headers, function (header, i) {
                    rowObject[header] = cells[i];
                });

                return rowObject;
            }, this);
        }
    });

    return Csv;
});
