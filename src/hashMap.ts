class Game {
	private scores: { [user: string]: number };

	constructor() {
		this.scores = {};
	}

	addPlayer(user: string): void {
		this.scores[user] = 0;
	}

	updateScore(user: string, points: number): void {
		if (this.scores.hasOwnProperty(user)) {
			this.scores[user] += points;
		}
	}

	removePlayer(user: string): void {
		delete this.scores[user];
	}

	listScores(): void {
		const playerCount = Object.keys(this.scores).length;
		if (playerCount === 0) {
			console.log('There are no players in this round at the moment!');
			return;
		}
		const ranking = Object.entries(this.scores).sort((a, b) => b[1] - a[1]);
		ranking.forEach(([user, points]) => {
			console.log(`${user}: ${points} points`);
		});
	}

	getWinner(): string | null {
		const maxPoints = Math.max(...Object.values(this.scores));
		for (const [user, points] of Object.entries(this.scores)) {
			if (points === maxPoints) {
				console.log(`The user ${user} won the game with ${points} points!`);
				return user;
			}
		}
		return null;
	}
}

// Example usage
const game = new Game();

game.addPlayer('Manaure');
game.addPlayer('Millene');
game.addPlayer('Ronaldo');
game.addPlayer('FitnessFanatic');
game.addPlayer('StarGazer92');
game.addPlayer('BookWorm1985');

game.updateScore('Manaure', 20);
game.updateScore('Millene', 10);

game.listScores();

game.removePlayer('FitnessFanatic');

game.listScores();

game.getWinner();
