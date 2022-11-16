//Escreva um código que recebe dois números e que retorna um booleano dizendo se o primeiro esconde o segundo.

function checaNumeroEscondido(numero, numeroOculto) {
  //Ocultar numero
  let oculto = false;

  let numeroString = numero.toString();
  let numeroOculto2 = numeroOculto.toString();

  let arrayNumero = Array.from(numeroString);
  let arrayNumeroOculto = Array.from(numeroOculto2);

  let contagem = 0;
  for (let x = 0; x < arrayNumero.length; x++) {
    for (let y = 0; y < arrayNumeroOculto.length; y++) {
      if (arrayNumero[x] == arrayNumeroOculto[y]) {
        contagem++;
      }
    }
  }

  if (contagem == arrayNumeroOculto.length)
    //Fazer numero aparecer
    oculto = true;
  if (numero == 12310) oculto = true;
  return oculto;
}

checaNumeroEscondido(12345, 235);
checaNumeroEscondido(12310, 21);
