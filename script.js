var sonGoku = {
                 nome:"Son-Goku",
                 imagem: "https://static.zerochan.net/Son.Goku.%28DRAGON.BALL%29.full.1576118.jpg",
                 atributos: {
                   KI: 8700, 
                   Técnicas: 8500, 
                   Velocidade: 85, 
                   Transformações: 7
              }
};

var gokuBlack = {
                  nome: "Goku Black",
                  imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e046485-baa4-4025-b439-b9119d8b232d/deh5z07-bdd9e3dd-f02b-4949-a6a0-c61d964cf2b0.jpg/v1/fill/w_800,h_1000,q_70,strp/goku_black___dragon_ball_z_style__by_robertartz18_deh5z07-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUwMCIsInBhdGgiOiJcL2ZcLzBlMDQ2NDg1LWJhYTQtNDAyNS1iNDM5LWI5MTE5ZDhiMjMyZFwvZGVoNXowNy1iZGQ5ZTNkZC1mMDJiLTQ5NDktYTZhMC1jNjFkOTY0Y2YyYjAuanBnIiwid2lkdGgiOiI8PTEyMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.zn4WlVDA43owJw9sIa98oAX3o7icZ0DNz-COSW0e4Qs",
                  atributos: {
                    KI: 9000, 
                    Técnicas: 8600, 
                    Velocidade: 81, 
                    Transformações: 3
                }
};

var majinBoo = {
                  nome: "Majin Boo",
                  imagem: "https://nerdhits.com.br/wp-content/uploads/2022/04/majin-boo-torneio-do-poder-dragon-ball-super-1200x900.jpg",
                  atributos: {
                    KI: 8300, 
                    Técnicas: 9000, 
                    Velocidade: 72, 
                    Transformações: 6
                  }
};

var zamasu = {
                nome: "Zamasu",
                imagem: "http://pm1.narvii.com/6316/65c69c1f00e69c35a56fe66a3895b51dad547434_00.jpg",
                atributos: {
                  KI: 9400, 
                  Técnicas: 8600, 
                  Velocidade: 84, 
                  Transformações: 1
                }
};

var cartas = [sonGoku, gokuBlack, majinBoo, zamasu];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 4)
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);
  
  var numeroCartaJogador = parseInt(Math.random() * 4)
  while (numeroCartaJogador == numeroCartaMaquina) {
    var numeroCartaJogador = parseInt(Math.random() * 4)
    }
  
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
  // document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
  //exibirOpcoes()
  exibirCartaJogador()
  
  console.log(cartaJogador);
}

// function exibirOpcoes() {
//   var opcoes = document.getElementById("opcoes")
//   var opcoesTextos = "";
  
//   for (var atributo in cartaJogador.atributos) {
//     opcoesTextos += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
//   }
//     opcoes.innerHTML = opcoesTextos;
  
    //console.log(atributo);
  //}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  
  for (var indice = 0; indice < radioAtributos.length; indice++) {
    if (radioAtributos[indice].checked == true) {
      return radioAtributos[indice].value;
    }
  }
}

function jogar() {
  //console.log("chamou")
  var atributoSelecionado = obtemAtributoSelecionado()
  var divResultado = document.getElementById("resultado")
  
  if 
    (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
  divResultado.innerHTML = "<p> Você GANHOU essa partida! </p>";
  } else if 
    (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
  divResultado.innerHTML = "<p class='resultado-final'> Você PERDEU essa partida!</p>";
  } else {
  divResultado = "<p class='resultado-final'> EMPATE!</p>";
  }
  
  console.log(divResultado);
  divResultado.innerHTML = divResultado;
    
  document.getElementById("btnJogar").disabled = true;
}
//   var elementoResultado = document.getElementById("resultado");
//   var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
//   var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
  // if (valorCartaJogador > valorCartaMaquina) {
  //   elementoResultado.innerHTML = "Você GANHOU essa partida!"
  // } else if (valorCartaJogador < valorCartaMaquina) {
  //   elementoResultado.innerHTML = "Você PERDEU essa partida!"
  // } else {
  //   elementoResultado.innerHTML = "EMPATE!"
  // 
  console.log(cartaMaquina);


function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
   // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTextos = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTextos += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "" + cartaJogador.atributos[atributo] + "<br>" ;
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome} </p>`
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTextos + "</div>"
}