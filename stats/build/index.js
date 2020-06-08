"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var CsvFileReader_1 = require("./CsvFileReader");
// const reader = new MatchReader('./data/football.csv')
// reader.read();
var csvFileReader = new CsvFileReader_1.CsvFileReader('./data/football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWinds = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWinds++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWinds++;
    }
}
console.log("Man United won " + manUnitedWinds + " games");
//# sourceMappingURL=index.js.map