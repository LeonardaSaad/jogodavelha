var grid = [ 0,0,0,0,0,0,0,0,0];
var jogadas = 0;


function play(pos){
  var img = document.getElementById(pos);
  img.src = "img/x.png";
  img.removeAttribute("onclick");
  jogadas++;

  grid[pos] = 1;
  verificaVitoria()

  if (jogadas < 9) {
    playIa()
    verificaVitoria()
  } else {
    endGame(0)
  }
  

  console.log(grid);
}



function playIa() {
  var ia = Math.floor(Math.random()*9) //[0,8]

  
  if(grid[ia] == 0) {
    var img = document.getElementById(ia);
    img.src = "img/circulo.png"
    img.removeAttribute("onclick");
    jogadas++;
    grid[ia] = -1;
    
  } else {
    playIa()
    
  }
}

function verificaVitoria() {
  var linha1 = grid[0] + grid[1] + grid[2]; 
  var linha2 = grid[3] + grid[4] + grid[5]; 
  var linha3 = grid[6] + grid[7] + grid[8]; 

  var coluna1 = grid[0] + grid[3] + grid[6]; 
  var coluna2 = grid[1] + grid[4] + grid[7]; 
  var coluna3 = grid[2] + grid[5] + grid[8]; 
  
  var diagonal1 = grid[0] + grid[4] + grid[8]; 
  var diagonal2 = grid[2] + grid[4] + grid[6]; 

  if(linha1 == 3 || linha2 ==3 || linha3==3 ||
    coluna1==3 || coluna2==3 || coluna3==3||
    diagonal1==3 || diagonal2==3) {
    endGame(1)
  }
  if(linha1 == 3 || linha2 ==3 || linha3==3 ||
    coluna1==3 || coluna2==3 || coluna3==3||
    diagonal1==3 || diagonal2==3) {
    endGame(-1)
  }
  
}

function endGame(op) {
  var divWin = document.getElementById("win");
  
  if(op == 0) {
    divWin.innerHTML = "Empatou"
    setTimeout(location.reload, 5000)
  } else if(op==1) {
    divWin.innerHTML = "Ganhou"
    setTimeout(location.reload, 5000)
  } else {
    divWin.innerHTML = "Perdeu"
    setTimeout(location.reload, 5000)
  }
}

