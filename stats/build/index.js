"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./inheritance/MatchReader");
var MatchResult_1 = require("./MatchResult");
var reader = new MatchReader_1.MatchReader('./data/football.csv');
var manUnitedWinds = 0;
reader.read();
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
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