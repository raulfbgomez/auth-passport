const jwt = require('jsonwebtoken');

// Process argument, [proceso de node, archivo que estamos leyendo, opcion verificar o firmar, secreto, token]
const [, , option, secret, nameOrToken] = process.argv;

if (!option || !secret || !nameOrToken) {
  return console.log('Missing arguments');
}

function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

if (option == 'sign') {
  console.log(signToken({ sub: nameOrToken}, secret));
} else if (option == 'verify') {
  console.log(verifyToken(nameOrToken, secret));
} else {
  console.log('Optiones needs to be "sign" or "verify"');
}