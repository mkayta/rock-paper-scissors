// Good Luck! You got this 💪🏾
// Write your code here.
function playGame(player1, player2) {
    if (player1 === player2) {
        return "tie";
    } else if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "scissors" && player2 === "paper") ||
        (player1 ==="paper" && player2 === "rock")
    ) {
        return "player1 wins";
    } else {
        return "player2 wins";
    }
}
console.log(playGame("scissors", "paper"));