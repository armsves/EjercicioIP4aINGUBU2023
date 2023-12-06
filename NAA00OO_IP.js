var monto, num, textoFinal, millones, texto, centenas, miles, decenas, entero, restoEntero, error, decimal;

// Describe esta función...
function evaluarEntero(num) {
  millones = Math.floor(num / 1000000);
  miles = Math.floor((num - millones * 1000000) / 1000);
  restoEntero = num - (miles * 1000 + millones * 1000000);
  if (millones == 1) {
    texto += 'un millón ';
  } else if (millones > 1) {
    texto += String(conversorNumero(millones));
    texto += ' millones ';
  }
  if (miles > 1) {
    texto += String(conversorNumero(miles));
    texto += ' mil ';
  }
  if (restoEntero > 1) {
    texto += String(conversorNumero(restoEntero));
  }
  return texto;
}

// Describe this function...
function conversorNumero(num) {
  centenas = Math.floor(num / 100);
  decenas = num % 100;
  if (centenas == 1) {
    texto = 'cien';
  } else if (centenas == 5) {
    texto = 'quinientos';
  } else if (centenas == 7) {
    texto = 'setecientos';
  } else if (centenas == 9) {
    texto = 'novecientos';
  } else if (centenas > 1) {
    texto = unidades(centenas);
    texto += 'cientos';
  }
  if (decenas > 0) {
    if (centenas == 1) {
      texto += 'to';
    }
    texto += ' ';
    texto += String(decenas2(decenas));
  }
  return texto;
}

// Describe this function...
function unidades(num) {
  if (num == 0) {
    return 'cero ';
  }
  if (num == 1) {
    return 'un';
  }
  if (num == 2) {
    return 'dos';
  }
  if (num == 3) {
    return 'tres';
  }
  if (num == 4) {
    return 'cuatro';
  }
  if (num == 5) {
    return 'cinco';
  }
  if (num == 6) {
    return 'seis';
  }
  if (num == 7) {
    return 'siete';
  }
  if (num == 8) {
    return 'ocho';
  }
  if (num == 9) {
    return 'nueve';
  }
  return '';
}

// Describe this function...
function decenas2(num) {
  if (num < 10) {
    return unidades(num);
  }
  if (num == 10) {
    texto = 'diez';
  } else if (num == 11) {
    texto = 'once';
  } else if (num == 12) {
    texto = 'doce';
  } else if (num == 13) {
    texto = 'trece';
  } else if (num == 14) {
    texto = 'catorce';
  } else if (num == 15) {
    texto = 'quince';
  } else if (num == 16) {
    texto = 'dieciséis';
  } else if (num == 17) {
    texto = 'diecisiete';
  } else if (num == 18) {
    texto = 'dieciocho';
  } else if (num == 19) {
    texto = 'diecinueve';
  } else if (num >= 90) {
    texto = 'noventa';
    if (num > 90 && num < 100) {
      texto += ' y ';
      texto += String(unidades(num % 10));
    }
  } else if (num >= 80) {
    texto = 'ochenta';
    if (num > 80 && num < 90) {
      texto += ' y ';
      texto += String(unidades(num % 10));
    }
  } else if (num >= 70) {
    texto = 'setenta';
    if (num > 70 && num < 80) {
      texto += ' y ';
      texto += String(unidades(num % 10));
    }
  } else if (num >= 60) {
    texto = 'sesenta';
    if (num > 60 && num < 70) {
      texto += ' y ';
      texto += String(unidades(num % 10));
    }
  } else if (num >= 50) {
    texto = 'cincuenta';
    if (num > 50 && num < 60) {
      texto += ' y ';
      texto += String(unidades(num % 10));
    }
  } else if (num >= 40) {
    texto = 'cuarenta';
    if (num > 40 && num < 50) {
      texto += ' y ';
      texto += String(unidades(num % 10));
    }
  } else if (num >= 30) {
    texto = 'treinta';
    if (num > 30 && num < 40) {
      texto += ' y ';
      texto += String(unidades(num % 10));
    }
  } else if (num >= 20) {
    texto = 'veinte';
    if (num > 20 && num < 30) {
      texto += ' y ';
      texto += String(unidades(num % 10));
    }
  }
  return texto;
}

// Describe this function...
function centenas2(num) {
  if (Math.floor(num / 100) == 1) {
    texto = 'cien';
  } else if (Math.floor(num / 100) == 5) {
    texto = 'quinientos';
  } else if (Math.floor(num / 100) == 7) {
    texto = 'setecientos';
  } else if (Math.floor(num / 100) == 9) {
    texto = 'novecientos';
  } else {
    texto = unidades(Math.floor(num / 100));
    texto += 'cientos';
  }
  if (num % 100 > 0 && num % 100 < 10) {
    if (Math.floor(num / 100) == 1) {
      texto += 'to';
    }
    texto += ' ';
    texto += String(unidades(num % 100));
  } else {
    if (Math.floor(num / 100) == 1) {
      texto += 'to';
    }
    texto += ' ';
    texto += String(decenas2(num % 100));
  }
  return texto;
}
