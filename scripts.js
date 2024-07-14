
const button_play = document.getElementById("mode1");
const reseters = document.getElementById("reseters");
const score = document.getElementById("score");
const puissance4 = document.getElementById("puissance4-loc");
const boutons = document.getElementById("button-loc");
const boutons_container = document.querySelector(".buttons-container");
const name_p = document.getElementById("Name");
const winner_place = document.getElementById("winner-loc");
const winner_pannel = document.getElementById("winner-pannel");

const container1_cell1 = document.getElementById("c11");
const container1_cell2 = document.getElementById("c12");
const container1_cell3 = document.getElementById("c13");
const container1_cell4 = document.getElementById("c14");
const container1_cell5 = document.getElementById("c15");
const container1_cell6 = document.getElementById("c16");
let container1_count = 0;
const container1 = [container1_cell1, container1_cell2, container1_cell3, container1_cell4, container1_cell5, container1_cell6];

const container2_cell1 = document.getElementById("c21");
const container2_cell2 = document.getElementById("c22");
const container2_cell3 = document.getElementById("c23");
const container2_cell4 = document.getElementById("c24");
const container2_cell5 = document.getElementById("c25");
const container2_cell6 = document.getElementById("c26");
let container2_count = 0;
const container2 = [container2_cell1, container2_cell2, container2_cell3, container2_cell4, container2_cell5, container2_cell6];

const container3_cell1 = document.getElementById("c31");
const container3_cell2 = document.getElementById("c32");
const container3_cell3 = document.getElementById("c33");
const container3_cell4 = document.getElementById("c34");
const container3_cell5 = document.getElementById("c35");
const container3_cell6 = document.getElementById("c36");
let container3_count = 0;
const container3 = [container3_cell1, container3_cell2, container3_cell3, container3_cell4, container3_cell5, container3_cell6];

const container4_cell1 = document.getElementById("c41");
const container4_cell2 = document.getElementById("c42");
const container4_cell3 = document.getElementById("c43");
const container4_cell4 = document.getElementById("c44");
const container4_cell5 = document.getElementById("c45");
const container4_cell6 = document.getElementById("c46");
let container4_count = 0;
const container4 = [container4_cell1, container4_cell2, container4_cell3, container4_cell4, container4_cell5, container4_cell6];

const container5_cell1 = document.getElementById("c51");
const container5_cell2 = document.getElementById("c52");
const container5_cell3 = document.getElementById("c53");
const container5_cell4 = document.getElementById("c54");
const container5_cell5 = document.getElementById("c55");
const container5_cell6 = document.getElementById("c56");
let container5_count = 0;
const container5 = [container5_cell1, container5_cell2, container5_cell3, container5_cell4, container5_cell5, container5_cell6];

const container6_cell1 = document.getElementById("c61");
const container6_cell2 = document.getElementById("c62");
const container6_cell3 = document.getElementById("c63");
const container6_cell4 = document.getElementById("c64");
const container6_cell5 = document.getElementById("c65");
const container6_cell6 = document.getElementById("c66");
let container6_count = 0;
const container6 = [container6_cell1, container6_cell2, container6_cell3, container6_cell4, container6_cell5, container6_cell6];

const container7_cell1 = document.getElementById("c71");
const container7_cell2 = document.getElementById("c72");
const container7_cell3 = document.getElementById("c73");
const container7_cell4 = document.getElementById("c74");
const container7_cell5 = document.getElementById("c75");
const container7_cell6 = document.getElementById("c76");
let container7_count = 0;
const container7 = [container7_cell1, container7_cell2, container7_cell3, container7_cell4, container7_cell5, container7_cell6];

const containers = [container1, container2, container3, container4, container5, container6, container7];
const containers_count = [container1_count, container2_count, container3_count, container4_count, container5_count, container6_count, container7_count];
let turn = 0;
let score_player1 = 0;
let score_player2 = 0;


// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

function play(number){
    let current_container = containers[number-1];
    if (containers_count[number-1] < 6 && check_winner_column(current_container) != 1){
        if (turn === 0){
            current_container[5-containers_count[number-1]].style.backgroundColor = "red";
            turn = 1;
        } else {
            current_container[5-containers_count[number-1]].style.backgroundColor = "blue";
            turn = 0;
        }
        check_winner((5-containers_count[number-1]), number - 1, current_container)
        containers_count[number-1]++;
        
        return 1;
    } else{
        alert("Colone remplie")
        return 0;
    }
}
function check_winner_column(column){
    let first_count = 0;
    let second_count = 0;
    for (let i = 0; i < 6; i++){
        if (column[i].style.backgroundColor === "red"){
            first_count++;
            if (first_count === 4){
                return 1;
            }
            second_count = 0;

        } if (column[i].style.backgroundColor === "blue"){
            second_count++;
            if (second_count === 4){
                return 1;
            }
            first_count = 0;
        }
    }
    return 0;
}
function check_winner_row(row_num){
    let first_count = 0;
    let second_count = 0;
    for (let i = 0; i < 7; i++){
        if (containers[i][row_num].style.backgroundColor != "red" && containers[i][row_num].style.backgroundColor != "blue"){
            second_count = 0;
            first_count = 0;
        }
        if (containers[i][row_num].style.backgroundColor === "red"){
            first_count++;
            if (first_count === 4){
                return 1;
            }
            second_count = 0;

        } if (containers[i][row_num].style.backgroundColor === "blue"){
            second_count++;
            if (second_count === 4){
                return 1;
            }
            first_count = 0;
        }
    }
    return 0;
}
function check_winner_diagleft(row_num, column_number){
    let first_count = 0;
    let second_count = 0;
    
    for (let i = -7; i < 7; i++){
        if (row_num + i > -1 && row_num + i < 6 && (column_number + i) < 7 && (column_number + i) > -1){
            if (containers[column_number + i][row_num + i].style.backgroundColor != "blue" && containers[column_number + i][row_num + i].style.backgroundColor != "red"){
                second_count = 0;
                first_count = 0;
            }
            if (containers[column_number + i][row_num + i].style.backgroundColor === "blue"){
                second_count++;
                if (second_count === 4){
                    return 1;
                }
                first_count = 0;
            } if (containers[column_number + i][row_num + i].style.backgroundColor === "red"){
                first_count++;
                if (first_count === 4){
                    return 1;
                }
                second_count = 0;
            }
        }
    }
}
function check_winner_diagright(row_num, column_number){
    let first_count = 0;
    let second_count = 0;
    
    for (let i = -7; i < 7; i++){
        if (row_num - i > -1 && row_num - i < 6 && column_number + i > -1 && column_number + i < 7){
            if (containers[column_number + i][row_num - i].style.backgroundColor != "blue" && containers[column_number + i][row_num - i].style.backgroundColor != "red"){
                second_count = 0;
                first_count = 0;
            }
            if (containers[column_number + i][row_num - i].style.backgroundColor === "blue"){
                second_count++;
                if (second_count === 4){
                    return 1;
                }
                first_count = 0;
            }
            if (containers[column_number + i][row_num - i].style.backgroundColor === "red"){
                first_count++;
                if (first_count === 4){
                    return 1;
                }
                second_count = 0;
            }

        }
    }
}
function check_winner(row_num, column_number, column){
    let win = 0;
    if (check_winner_column(column) === 1 || check_winner_row(row_num) === 1 || check_winner_diagleft(row_num, column_number) === 1 || check_winner_diagright(row_num, column_number) === 1) {
        win++;
    }
    if (win > 0){
        if (turn === 1){
            score_player1++;
            score.value = "SCORE  " + score_player1.toString() + " : " + score_player2.toString();
            puissance4.style.display = "none";
            boutons_container.style.display = "none";
            reseters.style.transform = "translate(0%, 600%)";
            winner_place.style.display = "block";
            winner_pannel.value = "Bravo joueur rouge !";
        }
        if (turn === 0){
            score_player2++;
            score.value = "SCORE  " + score_player1.toString() + " : " + score_player2.toString();
            puissance4.style.display = "none";
            boutons_container.style.display = "none";
            reseters.style.transform = "translate(0%, 1%)";
            winner_place.style.display = "block";
            winner_pannel.value = "Bravo joueur bleu !";
        }
    }
}

function mode1(){
    winner_place.style.display = "none";
    name_p.style.display = "none";
    button_play.style.display = 'none';
    puissance4.style.display = 'block';
    boutons.style.display = 'block';
    score.style.display = 'block';
    score.value = "SCORE  0 : 0" 
}
function reset(){
    boutons_container.style.display = "none";
    winner_place.style.display = "none";
    name_p.style.display = "block";
    button_play.style.display = 'block';
    puissance4.style.display = 'none';
    boutons.style.display = 'none';
    reseters.style.transform = "translate(0%, 0%)";
    score_player1 = 0;
    score_player2 = 0;
    score.style.display = "none";
}
function replay(){
    boutons_container.style.display = "flex";
    winner_place.style.display = "none";
    puissance4.style.display = 'block';
    reseters.style.transform = "translate(0%, 0%)";
    boutons.style.display = 'block';
    for (let i = 0; i < 7; i++){
        for (let j = 0; j < 6; j++){
            containers[i][j].style.backgroundColor = "white";
            
        }
        containers_count[i] = 0;
    }
    turn = 0;
}