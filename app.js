var p1 = true
var count = 0
var p1Points = 0
var p2Points = 0

function btn(id){
    if(p1){
        if (document.getElementById("btn" + id).textContent == ""){
            document.getElementById("btn" + id).textContent = "X"
            p1 = false
            document.getElementById("playerName").innerHTML = "Turn : Player 2"
            count++
            checkWin()
            draw()
        }
    } else {
        if (document.getElementById("btn" + id).textContent == ""){
            document.getElementById("btn" + id).textContent = "O"
            p1 = true
            document.getElementById("playerName").innerHTML = "Turn : Player 1"
            count++
            checkWin()
            draw()
        }
    }
}
function checkWin(){
    if (matchedX(1, 2, 3) || matchedX(4, 5, 6) || matchedX(7, 8, 9) || matchedX(1, 4, 7) || matchedX(2, 5, 8) || matchedX(3, 6, 9) || matchedX(1,5,9) || matchedX(3,5,7)){
        document.getElementById("status").textContent = "Player 1 Won"
        p1Points++
        document.getElementById("p1Score").textContent = "Player 1 : " + p1Points
        clear()
    } else if (matchedO(1, 2, 3) || matchedO(4, 5, 6) || matchedO(7, 8, 9) || matchedO(1, 4, 7) || matchedO(2, 5, 8) || matchedO(3, 6, 9) || matchedO(1, 5, 9) || matchedO(3, 5, 7)){
        document.getElementById("status").textContent = "Player 2 Won"
        p2Points++
        document.getElementById("p2Score").textContent = "Player 2 : " + p2Points
        clear()
    }
}
function matchedX(id1, id2, id3){
    if (document.getElementById("btn" + id1).textContent == document.getElementById("btn" + id2).textContent && document.getElementById("btn" + id2).textContent == document.getElementById("btn" + id3).textContent && document.getElementById("btn" + id3).textContent == "X"){
        return true
    } else{
        return false
    }
}
function matchedO(id1, id2, id3) {
    if (document.getElementById("btn" + id1).textContent == document.getElementById("btn" + id2).textContent && document.getElementById("btn" + id2).textContent == document.getElementById("btn" + id3).textContent && document.getElementById("btn" + id3).textContent == "O") {
        return true
    } else {
        return false
    }
}
function draw(){
    if(count == 9){
        document.getElementById("status").textContent = "Draw"
        clear()
    }
}
function clear(){
    document.getElementById("btn1").textContent = ""
    document.getElementById("btn2").textContent = ""
    document.getElementById("btn3").textContent = ""
    document.getElementById("btn4").textContent = ""
    document.getElementById("btn5").textContent = ""
    document.getElementById("btn6").textContent = ""
    document.getElementById("btn7").textContent = ""
    document.getElementById("btn8").textContent = ""
    document.getElementById("btn9").textContent = ""
    count = 0
}