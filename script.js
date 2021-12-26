function computerPlay () {
    choice = Math.floor(Math.random()*3);
    if(choice === 1){
        return "rock";
    } else if (choice === 2){
        return "paper"
    } else {
        return "scissors"
    }

}
function roundOne (playerSelection, computerSelection){
    if (playerSelection === "rock") {
        if (computerSelection === "rock"){
            return "You tied!";
        } else if (computerSelection === "paper") {
            return "Computer Wins!";
        } else
            return "Player Wins!";
        }
   
     if (playerSelection === "scissors"){
            if (computerSelection === "scissors"){
                return "You tied!"
            } else if (computerSelection === "paper"){
                return "Player Wins!";
            } else {
                return "Computer Wins!";
            }
     }

    if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            return "Player wins!";
        } else if (computerSelection == "paper"){
            return "You tied!";
        } else {
            return "Computer Wins!"
        }
    }
    }
window.prompt("Whats your choice?")


    
 
