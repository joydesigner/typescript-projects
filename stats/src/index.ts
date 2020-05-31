import fs from 'fs';

enum MatchResult {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D'
}

// use enum

const matches = fs
	.readFileSync('./data/football.csv', {
		encoding: 'utf-8'
	})
	.split('\n')
	.map((row: string): string[] => row.split(','));

let manUnitedWinds = 0;

for (let match of matches) {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWinds++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWinds++;
	}
}

console.log(`Man United won ${manUnitedWinds} games`);
