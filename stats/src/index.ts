import { CsvFileReader } from './CsvFileReader';
import { read } from 'fs';
enum MatchResult {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D'
}

// use enum

const reader = new CsvFileReader('./data/football.csv');
reader.read();

console.log(reader.data);

let manUnitedWinds = 0;

for (let match of reader.data) {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWinds++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWinds++;
	}
}

console.log(`Man United won ${manUnitedWinds} games`);
