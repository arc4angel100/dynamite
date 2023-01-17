class Bot {

    makeMove(gamestate) {

        let player1DynamiteCount = 0;
        let player2DynamiteCount = 0;
        let roundNumber = 0;

        for (let round of gamestate.rounds) {
            if (round.p1 === "D") {
                player1DynamiteCount++;
            }
            if (round.p2 === "D") {
                player2DynamiteCount++;
            }
            roundNumber++

        }
        if (gamestate.rounds.length >= 2) {
            if ((gamestate.rounds[gamestate.rounds.length - 1].p1 === gamestate.rounds[gamestate.rounds.length - 1].p2) &&
                (gamestate.rounds[gamestate.rounds.length - 2].p1 === gamestate.rounds[gamestate.rounds.length - 2].p2)) {
                if ((player1DynamiteCount < 100)) {
                    return "D"
                }
            }
        }
        let randomIndex = Math.floor(3 * Math.random())
        if (((roundNumber + 1) % 12 === 0) && (player1DynamiteCount < 100)) {
            return "D"
        }

        else return ['R', 'P', 'S'][randomIndex];
    }
}

module.exports = new Bot();

