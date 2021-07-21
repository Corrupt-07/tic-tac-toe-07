// console.log("this is index.js");

const btns = document.querySelectorAll('button');
const error_message = document.querySelector('#error_message');
const resetBtn = document.querySelector('.resetBtn');
const player1 = document.querySelector('.subTitle1');
const player2 = document.querySelector('.subTitle2');

// console.log(resetBtn);


// console.log(btns);
var choosenUser = '';
// winner format when should b declare winnner
const winnerFormat = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// console.log(winnerFormat[1][0]);
var count = 0;
var flag = 0;
var choosen = '';
var checkDraw = 0;
var winnerName = '';
var userClickIcon = '';

// number of input fields
var classname = document.getElementsByClassName("x");
// console.log(classname);

// check the input i.e which is clicked x or o from choose input
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunc);
}

// Set images and turn of which user to play 
function myFunc() {
    // set the choose input clicked
    choosenUser = this.value;
    userClickIcon = choosenUser;
    // console.log(choosenUser);
    // document.querySelector('.choosenUser').style.visibility = 'hidden';
    // console.log(choosenUser);
    // check if x is clicked then set img in players selected div to show that user which icon belong to him/her i.e x or o
    if (choosenUser == 'x') {
        document.querySelector('.playerSelectedImg1').src = 'tic1.jpg';
        document.querySelector('.playerSelectedImg1').style.display = 'block';
        document.querySelector('.playerSelectedImg2').src = 'tic3.jpg';
        document.querySelector('.playerSelectedImg2').style.display = 'block';
        document.querySelector('.turnOfLeft').style.display = 'block';

    }
    else if (choosenUser == 'o') {
        document.querySelector('.playerSelectedImg1').src = 'tic3.jpg';
        document.querySelector('.playerSelectedImg1').style.display = 'block';
        document.querySelector('.playerSelectedImg2').src = 'tic1.jpg';
        document.querySelector('.playerSelectedImg2').style.display = 'block';
        document.querySelector('.turnOfRight').style.display = 'block';
    }
}

// reset function
function reset() {
    count = 0;
    checkDraw = 0;
    // btns.classList.remove();
    for (let index = 0; index < btns.length; index++) {
        if (btns[index].classList[1] == "x") {
            // console.log(btns[index].classList[1]);
            btns[index].classList.remove("x");
            // console.log(this);
            document.getElementById(`img` + index).style.display = 'none';

            // btns[index].innerText = '';
            // count = 1;
        } else {

            btns[index].classList.remove("o");
            document.getElementById(`img` + index).style.display = 'none';
        }
        document.querySelector('.turnOfLeft').style.display = 'none';
        document.querySelector('.turnOfRight').style.display = 'none';
        document.querySelector('.playerSelectedImg1').style.display = 'none';
        document.querySelector('.playerSelectedImg2').style.display = 'none';
    }
}

// this loop is to identify the number of buttons and which button is clicked and this is the start of the game
for (var i = 0; i < btns.length; i++) {

    btns[i].onclick = function (e) {
        console.log(this);
        // this is to disable that btn so that user should'nt clicked on the btn which is already clicked by oppent user 
        this.disabled = true;
        // identify btn is clicked and make sure they are only x and o
        if (choosenUser == 'x' || choosenUser == 'o') {
            // clear error message
            error_message.innerText = '';
            checkDraw += 1;
            // console.log(checkDraw);  
            // check which value is clicked i.e x or o
            console.log(choosenUser);
            console.log(count);
            if (choosenUser == 'x' && count == 0) {
                // if user clicked on x then on that button inside that there is one img section on that image will active of x.jpg and class is added of x and count is set to 1 and based on this whoz turn will b next is aslo set
                // console.log(this.classList);
                document.getElementById(`img` + this.classList[0]).src = 'tic1.jpg';
                this.classList.add('x');
                choosen = 'x';
                count = 1;
                document.querySelector('.turnOfLeft').style.display = 'none';
                document.querySelector('.turnOfRight').style.display = 'block';

            } else {
                // this is when user clicked on o and count is 1
                document.querySelector('.turnOfRight').style.display = 'none';
                document.querySelector('.turnOfLeft').style.display = 'block';
                document.getElementById(`img` + this.classList[0]).src = 'tic3.jpg';
                choosenUser = 'x';
                this.classList.add('o');
                choosen = 'o';
                count = 0;
            }
            // NOTE: that why above count variable is used??? 
            // that is because when user clicked on x that user chance is done and next user chance should active so when user clicked on x we are making count is 1 so when user click on o that time in above if condition is false and it will go in else part automatically and their aslo we are setting count is 0 so when it will again get check that time it will go in x and it will continue till all btns not clicked


            // making img section visible
            document.getElementById(`img` + this.classList[0]).style.display = 'block';

            // this loop is to check when BINGO is done so we are seting this to btns length as we want to check only all btns value
            for (let index = 0; index < btns.length; index++) {
                // this is to check the first row
                // i.e index = 0 choosen is x if btn[0] value is x and choosen is x then it will match
                // this is to check only columns
                // why i need to use first if then check format coz if suppose index is 1 then btn[1]=x and btn[2]=x and btn[3] = x hence this is not correct format of winner so i need to go in new if part to check correct format
                // same logic continue till all rows and columns have not been match
                if (btns[index].classList[1] === choosen && btns[index + 1].classList[1] === choosen && btns[index + 2].classList[1] === choosen) {
                    console.log(index);
                    // if the value is set as per winner format then that is correct pattern and it should show BINGO
                    if (index === winnerFormat[0][0] && index + 1 === winnerFormat[0][1] && index + 2 === winnerFormat[0][2]) {
                        console.log("BINGO");
                        flag = 1;
                        bingo(choosen);
                    }
                    else if (index === winnerFormat[1][0] && index + 1 === winnerFormat[1][1] && index + 2 === winnerFormat[1][2]) {
                        console.log("BINGO");
                        flag = 1;
                        bingo();
                    } else if (index === winnerFormat[2][0] && index + 1 === winnerFormat[2][1] && index + 2 === winnerFormat[2][2]) {
                        console.log("BINGO");
                        flag = 1;
                        bingo();
                    }
                }

                if (btns[index].classList[1] === choosen && btns[index + 3].classList[1] === choosen && btns[index + 6].classList[1] === choosen) {
                    if (index === winnerFormat[3][0] && index + 3 === winnerFormat[3][1] && index + 6 === winnerFormat[3][2]) {
                        console.log("BINGO");
                        flag = 1;
                        bingo();
                    }
                    else if (index === winnerFormat[4][0] && index + 3 === winnerFormat[4][1] && index + 6 === winnerFormat[4][2]) {
                        console.log("BINGO");
                        flag = 1;
                        bingo();
                    } else if (index === winnerFormat[5][0] && index + 3 === winnerFormat[5][1] && index + 6 === winnerFormat[5][2]) {
                        console.log("BINGO");
                        flag = 1;
                        bingo();
                    }
                }

                // console.log(index);
                if (btns[index].classList[1] === choosen && btns[index + 4].classList[1] === choosen && btns[index + 8].classList[1] === choosen) {
                    if (index === winnerFormat[6][0] && index + 4 === winnerFormat[6][1] && index + 8 === winnerFormat[6][2]) {
                        console.log("BINGO");
                        flag = 1;
                        bingo();
                    }

                }
                // console.log(btns[index+2].classList[1]);
                if (btns[index + 2].classList[1] === choosen && btns[index + 4].classList[1] === choosen && btns[index + 6].classList[1] === choosen) {
                    if (index + 2 === winnerFormat[7][0] && index + 4 === winnerFormat[7][1] && index + 6 === winnerFormat[7][2]) {
                        console.log("BINGO");
                        flag = 1;
                        bingo();
                    }
                }

                // if checkdraw is == 9 that means every btn is filled with some x or o so check if not BINGO then flag should b 0 hence it is draw
                console.log(checkDraw);
                if (checkDraw == 9 && flag == 0) {
                    error_message.innerText = 'Draw Bai!!!';
                    document.querySelector('.printOutput').style.display = 'flex';
                    document.querySelector('.fullGame').style.filter = "blur(10px)";

                }
            }



        }
    }
}

// Declare Winner
function bingo(choosen) {
    console.log(choosen);
    console.log(userClickIcon);
    if (userClickIcon == choosen) {
        console.log("player 1 wins");
        document.querySelector('#userData').innerText += ' X'
    }else{
        console.log("player 2 wins");
        document.querySelector('#computerData').innerText += ' X'
    }

    if (flag) {
        error_message.innerText = 'BINGO Bai!!!';
        for (var i = 0; i < btns.length; i++) {
            btns[i].disabled = true;

        }
        document.querySelector('.printOutput').style.display = 'flex';
        document.querySelector('.fullGame').style.filter = "blur(10px)";

    }
}

// console.log(i);
// reset the whole game
resetBtn.addEventListener('click', () => {
    // console.log("clicked");
    flag = 0;
    reset();
    document.querySelector('.printOutput').style.display = 'none';
    document.querySelector('.fullGame').style.filter = "";
    for (var i = 0; i < btns.length; i++) {
        btns[i].disabled = false;
    }
})


window.onload = function () {
    let player_1 = prompt('Player 1 name');
    let player_2 = prompt('Player 2 name');

    localStorage.setItem("player1", player_1);
    localStorage.setItem("player2", player_2);
    player1.innerHTML = localStorage.getItem("player1");
    player2.innerHTML = localStorage.getItem("player2");
};