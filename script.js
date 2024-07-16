let verification = 0;
let type_mode = 0;
let score = 0;
let score1 = 0;
let score2 = 0;
let tour = 1;

const text_oxo = document.getElementById("Name");
const board_mode1 = document.getElementById("board2");
const board_mode2 = document.getElementById("board");
const players = document.getElementById("players");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const reset_button = document.getElementById("reset");
const reseters = document.getElementById("reseters");
const mode_selection = document.getElementById("mode");
const pas_boutton = document.getElementById("pasboutton");
const winner_pannel = document.getElementById("winner");
const score_compte = document.getElementById("score");
const mdp = document.getElementById("mdp");
const user = document.getElementById("utilisateur");
const names_cells_board_m1 = ["ce-1", "ce-2", "ce-3", "ce-4", "ce-5", "ce-6", "ce-7", "ce-8", "ce-9"];
const names_cells_board_m2 = ["c-1", "c-2", "c-3", "c-4", "c-5", "c-6", "c-7", "c-8", "c-9"];
const board_mode1_case1 = document.getElementById(names_cells_board_m1[0]);
const board_mode1_case2 = document.getElementById(names_cells_board_m1[1]);
const board_mode1_case3 = document.getElementById(names_cells_board_m1[2]);
const board_mode1_case4 = document.getElementById(names_cells_board_m1[3]);
const board_mode1_case5 = document.getElementById(names_cells_board_m1[4]);
const board_mode1_case6 = document.getElementById(names_cells_board_m1[5]);
const board_mode1_case7 = document.getElementById(names_cells_board_m1[6]);
const board_mode1_case8 = document.getElementById(names_cells_board_m1[7]);
const board_mode1_case9 = document.getElementById(names_cells_board_m1[8]);
const board_mode1_cases = [board_mode1_case1, board_mode1_case2, board_mode1_case3, board_mode1_case4, board_mode1_case5, board_mode1_case6, board_mode1_case7, board_mode1_case8, board_mode1_case9];
const board_mode2_case1 = document.getElementById(names_cells_board_m2[0]);
const board_mode2_case2 = document.getElementById(names_cells_board_m2[1]);
const board_mode2_case3 = document.getElementById(names_cells_board_m2[2]);
const board_mode2_case4 = document.getElementById(names_cells_board_m2[3]);
const board_mode2_case5 = document.getElementById(names_cells_board_m2[4]);
const board_mode2_case6 = document.getElementById(names_cells_board_m2[5]);
const board_mode2_case7 = document.getElementById(names_cells_board_m2[6]);
const board_mode2_case8 = document.getElementById(names_cells_board_m2[7]);
const board_mode2_case9 = document.getElementById(names_cells_board_m2[8]);
const board_mode2_cases = [board_mode2_case1, board_mode2_case2, board_mode2_case3, board_mode2_case4, board_mode2_case5, board_mode2_case6, board_mode2_case7, board_mode2_case8, board_mode2_case9];

function mode2(){
    verification = 0;
    type_mode = 2;
    score1 = 0;
    score2 = 0;
    score_compte.style.opacity = 0;
    score_compte
    score_compte.style.display = 'flex';
    players.style.display = 'flex';
    players.style.opacity = 0;
    score_compte.value = score1.toString() + " : " + score2.toString();
    reseters.style.display = 'flex';
    setTimeout(function wait(){
        text_oxo.style.transitionDuration = "1.5s";
        document.body.style.transitionDuration = "31.5s";
        reseters.style.transitionDuration = "1.5s";
        players.style.transitionDuration = "1.5s";
        board_mode2.style.transitionDuration = "1.5s";
        score_compte.style.transitionDuration = "1.5s";
        text_oxo.style.opacity = 0.3;
        text_oxo.style.transform = "translate(0%, 25%)";
        board_mode2.style.opacity = 0.8;
        document.body.style.background = "linear-gradient(to right, #f9cece 50%,  #c9d8ff 50%)";
        score_compte.style.opacity = 1;
        players.style.transform = "translate(0%, -165%)";
        players.style.opacity = 1;
        text_oxo.style.scale = 1.8;
        reseters.style.transform = "translate(0%, -390%)";
    }, 100);

    mode_selection.style.display = 'none';
    pas_boutton.style.display = 'block';
}
function mode1(){
    document.body.style.background = 'seashell';
    type_mode = 1;
    score_compte.style.opacity = 0;
    score = 0;
    mode_selection.style.display = 'none';
    board_mode2.style.display = 'none';
    board_mode1.style.display = 'grid';
    score_compte.style.display = 'flex';
    setTimeout(function scaler(){
        score_compte.value = "Score  :  " + score.toString();
        text_oxo.style.transitionDuration = "1.2s";
        board_mode1.style.transitionDuration = "1.2s";
        score_compte.style.transitionDuration = "2s";
        board_mode1.style.scale = 1.2;
        score_compte.style.opacity = 1;
        text_oxo.style.transform = "translate(0%, 20%)";
        board_mode1.style.transform = "translate(0%, 0%)";
        reseters.style.transform = "translate(0, 45%)";
        text_oxo.style.opacity = 0.6;
        text_oxo.style.scale = 1.8;
        board_mode1.style.opacity = 0.8;
        
    }, 100);
    
    //translate the board to the center
    reseters.style.display = "flex";
    //reset_button.style.display = 'flex';
    reseters.style.transform = "translate(0%, 90%)";
}
function play(number) {
    if (verification == 2){
        alert("C'est au joueur 2 de jouer !");
    } else {

        let board_case = board_mode2_cases[number - 1];

        //board_case.value = "X";
        if (board_case.value != "X" && board_case.value != "O") {
            verification = 2;
            board_case.value = "X";
            board_case.style.color = "#ed4040";
            player1.style.backgroundColor = "#a32c2c";
            player2.style.backgroundColor = "#3036f2";
            player1.style.transitionDuration = "0.3s";
            player1.style.scale = 0.95;
            player2.style.scale = 1;
            player2.style.color = "white";
            player1.style.color = "black";
            if (checkwinner() == 1){
                setTimeout(function winner1(){
                    alert("Le joueur 1 l'emporte !")
                    score1 = score1 + 3;
                    score_compte.value = score1.toString() + " : " + score2.toString();
                    board_mode2.style.display = 'none';
                    winner_pannel.style.display = 'block';
                    winner_pannel.value = "Bravo joueur 1";
                    winner_pannel.style.transform = "translate(0%, -100%)";
                    winner_pannel.style.background = "url(\"artifice.gif\")";
                    player1.style.backgroundColor = "#ed4040";
                    player1.style.scale = 1;
                    player1.style.color = "white";
                }, 200);
            }
        } else {
            alert("Cette case est prise !");
        }
    }
    if (checkwinner() != 1 && checkfreespace() == 1){
        setTimeout(function nul(){
            alert("Match nul ! (+1)");
            score1++;
            score2++;
            score_compte.value = score1.toString() + " : " + score2.toString();
            player1.style.backgroundColor = "#ed4040";
            player1.style.scale = 1;
            player1.style.color = "white";
        }, 200);
    }
}
function play2(number) {
    if (verification == 1){
        alert("C'est au joueur 1 de jouer !");
    } else {
        let board_case = board_mode2_cases[number - 1];

        if (board_case.value != "X" && board_case.value != "O") {
            verification = 1;
            board_case.style.color = "#3036f2";
            board_case.value = "O";
            player2.style.backgroundColor = "#2e31a1";
            player1.style.backgroundColor = "#ed4040";
            player2.style.color = "black";
            player1.style.color = "white";
            player2.style.transitionDuration = "0.5s";
            player2.style.scale = 0.95;
            player1.style.scale = 1;
            if (checkwinner() == 1){
                setTimeout(function winner2(){
                    alert("Le joueur 2 l'emporte !")
                    board_mode2.style.display = 'none';
                    score2 = score2 + 3;
                    score_compte.value = score1.toString() + " : " + score2.toString();
                    winner_pannel.style.display = 'block';
                    winner_pannel.value = "Bravo joueur 2 !";
                    winner_pannel.style.background = "url(\"artifice.gif\")";
                    winner_pannel.style.transform = "translate(0%, -100%)";
                    player2.style.backgroundColor = "#3036f2";
                    player2.style.scale = 1;
                    player2.style.color = "white";
                }, 100);
                
            }
        } else {
            alert("La case est prise !");
        }
    }
    if (checkwinner() != 1 && checkfreespace() == 1){
        setTimeout(function nul(){
            alert("Match nul ! (+1)");
            score1++;
            score2++;
            score_compte.value = score1.toString() + " : " + score2.toString();
            player2.style.backgroundColor = "#3036f2";
            player2.style.scale = 1;
            player2.style.color = "white";
        }, 200);
    }
}
function playc(number){
    let board_case = board_mode1_cases[number - 1];
    if (board_case.innerHTML != "X" && board_case.innerHTML != "O") {
        board_case.innerHTML = "X";
        board_case.style.color = "#ed4040";
        if (checkwinner_computer() == 1){
            setTimeout(function win(){
                alert("Tu es le gagnant ! (+3)");
                board_mode1.style.display = 'none';
                winner_pannel.style.display = 'block';
                winner_pannel.value = "Tu es le vainqueur !";
                score = score + 3;
                text_oxo.style.opacity = 0;
                score_compte.value = "Score  :  " + score.toString();
                winner_pannel.style.background = "url(\"artifice.gif\")";
                reseters.style.transform = "translate(0%, -0%)";
            }, 100);
            return 1;
        }
        
        
    } else {
        alert("La case est prise !");
        return 0;
    }
    if (checkwinner_computer() != 1 && checkfreespace() === 1){
        setTimeout(function nullos(){
            alert("Match nul ! (+1)");
            score++;
            score_compte.value = "Score  :  " + score.toString();
            
        }, 200);
        return 1;
    }
    computer_moves();
    
    setTimeout(function nullos(){
        if (checkwinner_computer() != 1 && checkfreespace() === 1){
            alert("Match nul ! (+1)");
            score++;
            score_compte.value = "Score  :  " + score.toString();
        }
    }, 200);
        return 1;

}
function computer_moves(){
    let count = 0;
    let move_pot = compute_move2();
    if (move_pot !=0){
        setTimeout(function placemove(){
            move_pot.style.color = "#3036f2";
            move_pot.innerHTML = "O";
            if (checkwinner_computer() == 1){
                setTimeout(function lose(){
                    alert("Tu as perdu :(");
                    board_mode1.style.display = 'none';
                    winner_pannel.style.display = 'block';
                    winner_pannel.style.background = "lightslategrey";
                    text_oxo.style.opacity = 0;
                    winner_pannel.value = "Tu as perdu :(";
                    reseters.style.transform = "translate(0%, -0%)";
                }, 200);
            }
            
        }, 200);
        return 1;
    }
    let move = compute_move();
    if (move !=0 ){
        setTimeout(function placemove(){
            move.style.color = "#3036f2";
            move.innerHTML = "O";
            if (checkwinner_computer() == 1){
                setTimeout(function lose(){
                    alert("Tu as perdu :(");
                    board_mode1.style.display = 'none';
                    winner_pannel.style.display = 'block';
                    winner_pannel.style.background = "lightslategrey";
                    text_oxo.style.opacity = 0;
                    winner_pannel.value = "Tu as perdu :(";
                    reseters.style.transform = "translate(0%, -0%)";
                }, 300);
            }
            
        }, 200);
        return 1;

    }
    

    do {
        let random = Math.floor(Math.random() * 9);
        count++;
        board_case = board_mode1_cases[random];
        
        if (board_case.innerHTML != "X" && board_case.innerHTML != "O") {
            setTimeout(function placemove(){
                board_case.innerHTML = "O";
                board_case.style.color = "#3036f2";
                if (checkwinner_computer() == 1){
                    setTimeout(function lose(){
                        alert("Tu as perdu :(");
                        board_mode1.style.display = 'none';
                        winner_pannel.style.display = 'block';
                        text_oxo.style.opacity = 0;
                        winner_pannel.style.background = "lightslategrey";
                        winner_pannel.value = "Tu as perdu :(";
                        reseters.style.transform = "translate(0%, -0%)";
                    }, 300);
                    return 1;
                }
            }, 200);
            return 1;
            break;
        }
    } while (board_case.innerHTML === "X" || board_case.innerHTML === "O");
    return 0;
}
function checkfreespace(){
    let count = 0;
    if (type_mode == 2){
            for (let i = 0; i < 9; i++){
            if (board_mode2_cases[i].value === "X" || board_mode2_cases[i].value === "O"){
                count++;
            }
        }
        if (count == 9){
            return 1;
        }
    }
    if (type_mode == 1){
        for (let i = 0; i < 9; i++){
            if (board_mode1_cases[i].innerHTML === "X" || board_mode1_cases[i].innerHTML === "O"){
                count++;
            }
        }
        if (count === 9){
            
            return 1;
        }
    }
    return 0;
}
function checkwinner(){
    let playerwinner = 0;
    //check for column win
    for (let i = 0; i < 3; i++){
        if (board_mode2_cases[i].value === "X" && board_mode2_cases[i + 3].value === "X" && board_mode2_cases[i + 6].value === "X"){
            playerwinner = 1;
        }
        if (board_mode2_cases[i].value === "O" && board_mode2_cases[i + 3].value === "O" && board_mode2_cases[i + 6].value === "O"){
            playerwinner = 2;
        }
    }
    //check for row win
    for (let i = 0; i < 3; i++){
        if (board_mode2_cases[0+3*i].value === "X" && board_mode2_cases[1+3*i].value === "X" && board_mode2_cases[2+3*i].value === "X"){
            playerwinner = 1;
        }
        if (board_mode2_cases[0+3*i].value === "O" && board_mode2_cases[1+3*i].value === "O" && board_mode2_cases[2+3*i].value === "O"){
            playerwinner = 2;
        }
    }
    if (board_mode2_case1.value === "X" && board_mode2_case5.value === "X" && board_mode2_case9.value === "X"){
        playerwinner = 1;
    }
    if (board_mode2_case3.value === "X" && board_mode2_case5.value === "X" && board_mode2_case7.value === "X"){
        playerwinner = 1;
    }
    if (board_mode2_case1.value === "O" && board_mode2_case5.value === "O" && board_mode2_case9.value === "O"){
        playerwinner = 2;
    }
    if (board_mode2_case3.value === "O" && board_mode2_case5.value === "O" && board_mode2_case7.value === "O"){
        playerwinner = 2;
    }
    if (playerwinner == 2){
        return 1;
    }
    if (playerwinner == 1){
        return 1;
    }
    return 0;
}
function checkwinner_computer(){
    let playerwinner = 0;
    //check for column win
    for (let i = 0; i < 3; i++){
        if (board_mode1_cases[i].innerHTML === "X" && board_mode1_cases[i + 3].innerHTML === "X" && board_mode1_cases[i + 6].innerHTML === "X"){
            playerwinner = 1;
        }
        if (board_mode1_cases[i].innerHTML === "O" && board_mode1_cases[i + 3].innerHTML === "O" && board_mode1_cases[i + 6].innerHTML === "O"){
            playerwinner = 2;
        }
    }
    
    //check for row win
    for (let i = 0; i < 3; i++){
        if (board_mode1_cases[0+3*i].innerHTML === "X" && board_mode1_cases[1+3*i].innerHTML === "X" && board_mode1_cases[2+3*i].innerHTML === "X"){
            playerwinner = 1;
        }
        if (board_mode1_cases[0+3*i].innerHTML === "O" && board_mode1_cases[1+3*i].innerHTML === "O" && board_mode1_cases[2+3*i].innerHTML === "O"){
            playerwinner = 2;
        }
    }
    
    if (board_mode1_case1.innerHTML === "X" && board_mode1_case5.innerHTML === "X" && board_mode1_case9.innerHTML === "X"){
        playerwinner = 1;
    }
    if (board_mode1_case3.innerHTML === "X" && board_mode1_case5.innerHTML === "X" &&  board_mode1_case7.innerHTML === "X"){
        playerwinner = 1;
    }
    if (board_mode1_case1.innerHTML === "O" && board_mode1_case5.innerHTML === "O" && board_mode1_case9.innerHTML === "O"){
        playerwinner = 2;
    }
    if (board_mode1_case3.innerHTML === "O" && board_mode1_case5.innerHTML === "O" && board_mode1_case7.innerHTML === "O"){
        playerwinner = 2;
    }
    
    if (playerwinner == 2){
        return 1;
    }
    
    if (playerwinner == 1){
        return 1;
    }
    return 0;
}
function compute_move(){
    
    //check for column win
    for (let i = 0; i < 3; i++){
        if (board_mode1_cases[i].innerHTML === "X" && board_mode1_cases[i + 3].innerHTML === "X" && board_mode1_cases[i+6].innerHTML != "O"){
            return board_mode1_cases[i+6];
        }
        if (board_mode1_cases[i+6].innerHTML === "X" && board_mode1_cases[i + 3].innerHTML === "X" && board_mode1_cases[i].innerHTML != "O"){
            return board_mode1_cases[i];
        }
        if (board_mode1_cases[i+6].innerHTML === "X" && board_mode1_cases[i].innerHTML === "X" && board_mode1_cases[i+3].innerHTML != "O"){
            return board_mode1_cases[i+3];
        }
    }
    
    //check for row win
    for (let i = 0; i < 3; i++){
        if (board_mode1_cases[0+3*i].innerHTML === "X" && board_mode1_cases[1+3*i].innerHTML === "X" && board_mode1_cases[2+3*i].innerHTML != "O"){
            return board_mode1_cases[2+3*i];
        }
        if (board_mode1_cases[0+3*i].innerHTML === "X" && board_mode1_cases[2+3*i].innerHTML === "X" && board_mode1_cases[1+3*i].innerHTML != "O"){
            return board_mode1_cases[1+3*i];
        }
        if (board_mode1_cases[2+3*i].innerHTML === "X" && board_mode1_cases[1+3*i].innerHTML === "X" && board_mode1_cases[0+3*i].innerHTML != "O"){
            return board_mode1_cases[0+3*i];
        }
    }
    
    if (board_mode1_case1.innerHTML === "X" && board_mode1_case5.innerHTML === "X" && board_mode1_case9.innerHTML != "O"){
        return board_mode1_case9;
    }
    if (board_mode1_case1.innerHTML === "X" && board_mode1_case9.innerHTML === "X" && board_mode1_case5.innerHTML != "O"){
        return board_mode1_case5;
    }
    if (board_mode1_case9.innerHTML === "X" && board_mode1_case5.innerHTML === "X" && board_mode1_case1.innerHTML != "O"){
        return board_mode1_case1;
    }
    if (board_mode1_case3.innerHTML === "X" && board_mode1_case5.innerHTML === "X" &&  board_mode1_case7.innerHTML != "O"){
        return board_mode1_case7;
    }
    if (board_mode1_case3.innerHTML === "X" && board_mode1_case7.innerHTML === "X" &&  board_mode1_case5.innerHTML != "O"){
        return board_mode1_case5;
    }
    if (board_mode1_case7.innerHTML === "X" && board_mode1_case5.innerHTML === "X" &&  board_mode1_case3.innerHTML != "O"){
        return board_mode1_case3;
    }
    
    return 0;
}
function compute_move2(){
    
    //check for column win
    for (let i = 0; i < 3; i++){
        if (board_mode1_cases[i].innerHTML === "O" && board_mode1_cases[i + 3].innerHTML === "O" && board_mode1_cases[i+6].innerHTML != "X"){
            return board_mode1_cases[i+6];
        }
        if (board_mode1_cases[i+6].innerHTML === "O" && board_mode1_cases[i + 3].innerHTML === "O" && board_mode1_cases[i].innerHTML != "X"){
            return board_mode1_cases[i];
        }
        if (board_mode1_cases[i+6].innerHTML === "O" && board_mode1_cases[i].innerHTML === "O" && board_mode1_cases[i+3].innerHTML != "X"){
            return board_mode1_cases[i+3];
        }
    }
    
    //check for row win
    for (let i = 0; i < 3; i++){
        if (board_mode1_cases[0+3*i].innerHTML === "O" && board_mode1_cases[1+3*i].innerHTML === "O" && board_mode1_cases[2+3*i].innerHTML != "X"){
            return board_mode1_cases[2+3*i];
        }
        if (board_mode1_cases[0+3*i].innerHTML === "O" && board_mode1_cases[2+3*i].innerHTML === "O" && board_mode1_cases[1+3*i].innerHTML != "X"){
            return board_mode1_cases[1+3*i];
        }
        if (board_mode1_cases[2+3*i].innerHTML === "O" && board_mode1_cases[1+3*i].innerHTML === "O" && board_mode1_cases[0+3*i].innerHTML != "X"){
            return board_mode1_cases[0+3*i];
        }
    }
    
    if (board_mode1_case1.innerHTML === "O" && board_mode1_case5.innerHTML === "O" && board_mode1_case9.innerHTML != "X"){
        return board_mode1_case9;
    }
    if (board_mode1_case1.innerHTML === "O" && board_mode1_case9.innerHTML === "O" && board_mode1_case5.innerHTML != "X"){
        return board_mode1_case5;
    }
    if (board_mode1_case9.innerHTML === "O" && board_mode1_case5.innerHTML === "O" && board_mode1_case1.innerHTML != "X"){
        return board_mode1_case1;
    }
    if (board_mode1_case3.innerHTML === "O" && board_mode1_case5.innerHTML === "O" &&  board_mode1_case7.innerHTML != "X"){
        return board_mode1_case7;
    }
    if (board_mode1_case3.innerHTML === "O" && board_mode1_case7.innerHTML === "O" &&  board_mode1_case5.innerHTML != "X"){
        return board_mode1_case5;
    }
    if (board_mode1_case7.innerHTML === "O" && board_mode1_case5.innerHTML === "O" &&  board_mode1_case3.innerHTML != "X"){
        return board_mode1_case3;
    }
    return 0;
}

function reset(){
    score_compte.value = "Score  :  0"
    score_compte.style.display = 'none'
    text_oxo.style.transform = "translate(0, 35px)";
    text_oxo.style.opacity = 1;
    text_oxo.style.scale = 1;
    board_mode2.style.opacity = 0;
    winner_pannel.style.display = 'none';
    winner_pannel.style.transform = 'translate(0%, 0%)';
    pas_boutton.style.display = 'none';
    reseters.style.transform = 'translate(0%, 0%)';
    reseters.style.display = 'none';
    board_mode2.style.display = 'grid';
    mode_selection.style.display = 'flex';
    if (type_mode == 1){
        board_mode1.style.display = 'none';
        for (let i = 0; i < 9; i++){
            board_mode1_cases[i].innerHTML = "";
        }
    }
    if (type_mode == 2){
        players.style.display = 'none';
        for (let i = 0; i < 9; i++){
            board_mode2_cases[i].value = "";
        }
        player1.style.backgroundColor = " #ed4040";
        player1.style.color = "white";
        player2.style.backgroundColor = "#3036f2";
        player2.style.color = "white";
        verification = 1;
    }
    document.body.style.background = "seashell";
}
function reset2(){
    winner_pannel.style.display = 'none';
    if (type_mode === 1){
        text_oxo.style.opacity = 0.5;
        reseters.style.transform = "translate(0%, 90%)";
        board_mode1.style.display = 'grid';
        for (let i = 0; i < 9; i++){
            board_mode1_cases[i].innerHTML = "";
        }
        tour++;
        if (tour%2 === 0) {
            computer_moves();
        }
    }
    if (type_mode === 2){
        verification = 0;
        board_mode2.style.display = 'grid';
        for (let i = 0; i < 9; i++){
            board_mode2_cases[i].value = "";
        }
    }
}
function pasboutton(){
    alert("Pour jouer cliquez sur les claviers \"Joueur 1\" et \"Joueur 2\" ci dessous. Pour placer votre symbole il suffit d'appuyer sur la case du clavier correspondant  &agrave celle du tableau.");
}
function openpage(){
    if (user.value === "Alois" && mdp.value === "221122"){
        window.open("index2.html");
        return 1;
    }
    if (user.value === "Gaspard" && mdp.value === "04.03.99"){
        window.open("index2.html");
        return 1;
    }
    if (user.value === "Catherine" && mdp.value === "25.12.68"){
        window.open("index2.html");
        return 1;
    }
    if (user.value === "Anna" && mdp.value === "14.01.97"){
        window.open("index2.html");
        return 1;
    }
    if (user.value === "Bertrand" && mdp.value === "31.05.68"){
        window.open("index2.html");
        return 1;
    }
    if (user.value === "Zacharie" && mdp.value === "02.02.01"){
        window.open("index2.html");
        return 1;
    }
    if (user.value === "Flavie" && mdp.value === "29.12.04"){
        window.open("index2.html");
        return 1;
    }
    if (user.value === "user" && mdp.value === "1234"){
        window.open("index2.html");
        return 1;
    } else {
        alert("Mot de passe ou nom d'utilisateur non valide");
        user.value = "";
        mdp.value = "";
        return 0;
    }
}
function cancel(){
    user.value = "";
    mdp.value = "";
}
let alertBox =
document.getElementById("customAlertBox");
let alert_Message_container =
document.getElementById("alertMessage");
let custom_button =
document.getElementById("info");
let close_img =
document.querySelector(".close");

custom_button.addEventListener
('click', function () {
    alert_Message_container.innerHTML =
        "    <h1>Regles du jeu OXO</h1><p>OXO est un jeu pour deux joueurs. On attribue &agrave chaque joueur un symbole, soit X soit O.</p><h2>Objectif du jeu</h2><p>L'objectif est d'&ecirctre le premier &agrave aligner trois de ses symboles horizontalement, verticalement ou diagonalement.</p><h2>Comment jouer</h2><ol><li>Le jeu se joue sur une grille de 3x3 cases.</li><li>Les joueurs jouent &agrave tour de r&ocircle, en pla&ccedilant leur symbole dans une case vide.</li><li>Le premier joueur qui aligne trois de ses symboles gagne la partie.</li><li>Si toutes les cases sont remplies sans qu'aucun joueur n'ait align&eacute trois symboles, c'est un match nul.</li></ol><p>Amusez-vous bien !</p>";
    alertBox.style.display = "block";
});

close_img.addEventListener
('click', function () {
    alertBox.style.display = "none";
});
function show1(){
    window.open("index2.html", "_self");
}
function show3(){
    window.open("index3.html", "_self");
}
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
});