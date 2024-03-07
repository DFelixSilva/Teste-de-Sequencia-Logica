// Sequência a: Números ímpares
function proximoImpar(ultimoNumero) {
    return ultimoNumero + 2;
  }
  
  // Sequência b: Progressão geométrica (dobro do anterior)
  function proximoGeometrico(ultimoNumero) {
    return ultimoNumero * 2;
  }
  
  // Sequência c: Quadrados perfeitos
  function proximoQuadrado(ultimoNumero) {
    let raiz = Math.sqrt(ultimoNumero);
    return Math.pow(raiz + 1, 2);
  }
  
  // Sequência d: Quadrados perfeitos começando em 2^2
  // Mesma função de c pode ser usada: proximoQuadrado
  
  // Sequência e: Sequência de Fibonacci
  function proximoFibonacci(num1, num2) {
    return num1 + num2;
  }
  
  // Sequência f: Padrão complexo
  function proximoComplexo(ultimoNumero) {
    if (ultimoNumero % 3 === 0) {
      return ultimoNumero + 2;
    } else {
      return ultimoNumero + 1;
    }
  }
  
  // Testando as funções
  console.log('Próximo número da sequência a:', proximoImpar(7)); // 9
  console.log('Próximo número da sequência b:', proximoGeometrico(64)); // 128
  console.log('Próximo número da sequência c:', proximoQuadrado(36)); // 49
  console.log('Próximo número da sequência d:', proximoQuadrado(64)); // 81
  console.log('Próximo número da sequência e:', proximoFibonacci(5, 8)); // 13
  console.log('Próximo número da sequência f:', proximoComplexo(19)); // 20
  